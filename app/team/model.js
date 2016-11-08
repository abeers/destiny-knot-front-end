import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  teamMembers: DS.hasMany('team-member'),
  isNotFull: Ember.computed('teamMembers', function(){
    return this.get('teamMembers').get('length') < 6;
  }),
  efficacy: Ember.computed('teamMembers', function () {
    let result = [];
    let members = this.get('teamMembers');
    console.log(members.get('length'));

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
      console.log(member.get('pokemon').get('efficacy'));
    });

    return result;
  })
});
