import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePokemon () {
      this.sendAction('deletePokemon', this.get('member'));
    },
  }
});
