import DS from 'ember-data';

export default DS.Model.extend({
  base_stat: DS.attr('number'),
  stat: DS.belongsTo('stat'),
});
