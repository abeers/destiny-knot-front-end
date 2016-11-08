import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTeam () {
      this.sendAction('createTeam');
    },
  }
});
