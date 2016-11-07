import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('team-member', params.member_id);
  },
  actions: {
    submit (identifier, id) {
      return this.get('store').query('pokemon', {identifier: identifier})
      .then((record) => {
        let member = this.get('store').peekRecord('team-member', id);
        member.set('pokemon', record.objectAt(0));
        member.save();
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  }
});
