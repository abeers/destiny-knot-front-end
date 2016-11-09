import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  teams: DS.hasMany('team'),
  teamMembers: DS.hasMany('team-member')
});
