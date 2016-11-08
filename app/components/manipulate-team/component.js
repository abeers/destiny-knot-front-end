import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editName (name, team) {
      this.sendAction('editName', name, team);
    },
    deleteTeam (team) {
      this.sendAction('deleteTeam', team);
    },
  }
});
