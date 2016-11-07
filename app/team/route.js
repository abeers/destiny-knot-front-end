import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('team', params.team_id);
  },
  actions: {
    view (team, pokemon) {
      console.log('pokemon', pokemon);
      console.log('team', team);
      let idParams = {
        pokemon_id: pokemon.get('id'),
        team_id: team.get('id')
      };
      this.transitionTo('team.pokemon', idParams);
    }
  }
});
