import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('pokemon', params.pokemon_id);
    // let model = this.get('store').findRecord('pokemon', params.pokemon_id);
    // console.log(model.get('identifier'));
    // return model;
  },
  actions: {
    submit (identifier) {
      // let records = this.get('store').query('pokemon', { identifier: identifier });
      // console.log(records);
      return this.get('store').query('pokemon', {identifier: identifier})
      .then((record) => {
        this.transitionTo('team.pokemon', record.objectAt(0));
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  }
});
