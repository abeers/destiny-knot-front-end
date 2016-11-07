import DS from 'ember-data';

export default DS.Model.extend({
  identifier: DS.attr('string'),
  // pokemon_stats: DS.hasMany('pokemon-stat'),
});
