import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTeam () {
      this.sendAction('deleteTeam', this.get('team'));
    },
  }
});
