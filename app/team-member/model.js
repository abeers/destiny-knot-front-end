import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('number'),
  pokemon: DS.belongsTo('pokemon'),
  team: DS.belongsTo('team'),
  user: DS.belongsTo('user')
});
