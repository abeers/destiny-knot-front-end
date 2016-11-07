import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    this.get('store').findAll('type');
    return this.get('store').findRecord('team', params.team_id);
  },
  actions: {
    addPokemon (team) {
      let newPokemon = this.get('store').createRecord('team-member', {team: team});
      newPokemon.save();
      // .then((record) => {
      //
      // })
      // .catch(() => {
      //   this.get('flashMessages')
      //   .danger('There was a problem. Please try again.');
      // });
    },
  }
});
