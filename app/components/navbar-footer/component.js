import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addPokemon () {
      this.sendAction('addPokemon', this.get('team'));
    }
  }
});
