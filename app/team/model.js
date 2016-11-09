import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  teamMembers: DS.hasMany('team-member'),
  user: DS.belongsTo('user'),

  auth: Ember.inject.service(),
  isEditable: Ember.computed(function() {
    return this.get('user').get('id').toString() === this.get('auth').get('credentials').get('id').toString();
  }),

  isNotFull: Ember.computed('teamMembers', function(){
    return this.get('teamMembers').get('length') < 6;
  }),
  efficacy: Ember.computed('teamMembers.@each.pokemon', function () {
    let result = [];
    let members = this.get('teamMembers');

    members.forEach((member, memberIndex) => {
      let efficacies = member.get('pokemon').get('efficacy');

      efficacies.forEach((indPokemon, index) => {
        if (memberIndex === 0) {
          result[index] = {
            damageType: indPokemon.damageType,
            damageFactor: indPokemon.damageFactor === 0 ? 0.125 : indPokemon.damageFactor
          };
        } else {
          let oldFactor = result[index].damageFactor;
          let newFactor = indPokemon.damageFactor === 0 ? 0.125 : indPokemon.damageFactor;
          result[index].damageFactor = oldFactor * newFactor;
        }
      });
    });

    return result;
  })
});
