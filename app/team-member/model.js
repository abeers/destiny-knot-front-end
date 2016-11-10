import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  // id: DS.attr('number'),
  pokemon: DS.belongsTo('pokemon'),
  team: DS.belongsTo('team'),
  user: DS.belongsTo('user'),
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isEditable: Ember.computed(function() {
    if (this.get('isAuthenticated')) {
      return this.get('user').get('id').toString() === this.get('auth').get('credentials').get('id').toString();
    }
    return false;
  }),
});
