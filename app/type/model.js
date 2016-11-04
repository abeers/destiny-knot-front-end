import DS from 'ember-data';

export default DS.Model.extend({
  identifier: DS.attr('string'),
  pokemon: DS.hasMany('pokemon')
});
