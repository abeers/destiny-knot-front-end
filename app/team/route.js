import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    this.get('store').findAll('type');
    return this.get('store').findRecord('team', params.team_id);
  },
  actions: {
    addPokemon (team) {
      return this.get('store').findRecord('pokemon', 132)
      .then((ditto) => {
        let newMember = this.get('store').createRecord('team-member', {team: team, pokemon: ditto});
        return newMember.save();
      })
      .then((record) => {
        console.log(record.get('id'));
        this.transitionTo('team.pokemon', record.get('id'));
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
    editName (name, team) {
      team.set('name', name);
      return team.save()
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
    deleteTeam (team) {
      return team.destroyRecord()
      .then(() => {
        this.transitionTo('teams');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
