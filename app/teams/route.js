import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('team');
  },
  actions: {
    createTeam () {
      let newTeam = this.get('store').createRecord('team', {name: 'New Team'});
      newTeam.save()
      .then((record) => {
        this.transitionTo('team.breakdown', record);
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  }
});
