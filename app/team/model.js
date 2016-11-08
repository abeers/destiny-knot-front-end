import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  teamMembers: DS.hasMany('team-member'),
  isNotFull: Ember.computed('teamMembers', function(){
    return this.get('teamMembers').get('length') < 6;
  })
});
