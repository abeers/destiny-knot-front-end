import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    this.get('store').findAll('type');
    return this.get('store').findRecord('team', params.team_id);
  },
  actions: {

  }
});
