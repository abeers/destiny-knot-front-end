import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log(params);
    return this.get('store').findRecord('pokemon', params.pokemon_id);
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
