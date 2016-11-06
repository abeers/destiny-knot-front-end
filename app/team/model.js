import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  pokemons: DS.hasMany('pokemon'),
  isNotFull: Ember.computed('pokemons', function(){
    return this.get('pokemons').get('length') < 6;
  })
});
