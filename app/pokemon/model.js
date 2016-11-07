import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  identifier: DS.attr('string'),
  types: DS.hasMany('type'),
  teams: DS.hasMany('team'),
  abilities: DS.hasMany('ability'),
  efficacy: Ember.computed(function () {
    let result = [];

    let types = this.get('types');
    console.log('Computed types ', types.get('length'));

    types.forEach((type, typeIndex) => {
      let efficacies = type.get('type_efficacies');

      // if (typeIndex === 0) {
      //   result = efficacies;
      //
      // } else {

      efficacies.forEach((damageType, index) => {

        if (typeIndex === 0) {
          result[index] = {
            damage_type: damageType.get('damage_type').get('identifier'),
            damage_factor: damageType.get('damage_factor') / 100
          };
        } else {
          let oldFactor = result[index].damage_factor;
          let newFactor = damageType.get('damage_factor');
          result[index].damage_factor = oldFactor * newFactor / 100;
        }

      });
      // }
      result.forEach((resultType) => {
        console.log(resultType.damage_type, ': ', resultType.damage_factor);
      });

    });

    return result;
  })
});
