import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  damage_factor: DS.attr('number'),
  damage_type_id: DS.attr('number'),
  // damage_type: DS.belongsTo('type'),
  damage_type: Ember.computed('target_type', function () {
    return this.get('store').peekRecord('type', this.get('damage_type_id'));
  }),
  target_type: DS.belongsTo('type')
});
