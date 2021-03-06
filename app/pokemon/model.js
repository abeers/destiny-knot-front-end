import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  identifier: DS.attr('string'),
  species_id: DS.attr('string'),
  types: DS.hasMany('type'),
  pokemon_stats: DS.hasMany('pokemon-stat'),
  abilities: DS.hasMany('ability'),
  extension: Ember.computed(function() {
    let result = '';
    let split = this.get('identifier').split(/\s*\-\s*/g);
    for (let i = 1; i < split.length; i++) {
      if (split[i] !== 'oh' && split[i] !== 'z') {
        result += '-';
        result += split[i];
      }
    }
    return result;
  }),
  efficacy: Ember.computed(function () {
    let result = [];
    let types = this.get('types');

    types.forEach((type, typeIndex) => {
      let efficacies = type.get('type_efficacies');

      efficacies.forEach((damageType, index) => {
        if (typeIndex === 0) {
          result[index] = {
            damageType: damageType.get('damage_type').get('identifier'),
            damageFactor: damageType.get('damage_factor') / 100
          };
        } else {
          let oldFactor = result[index].damageFactor;
          let newFactor = damageType.get('damage_factor');
          result[index].damageFactor = oldFactor * newFactor / 100;
        }
      });

    });

    result.forEach((efficacy, index) => {
      let initial = -12.5 * Math.log2(efficacy.damageFactor) + 50;
      if (initial < 0) {
        result[index].barMark = 0;
      } else if (initial > 100) {
        result[index].barMark = 100;
      } else {
        result[index].barMark = initial;
      }
    });

    return result;
  })
});
