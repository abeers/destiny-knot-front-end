import ApplicationSerializer from 'destiny-knot/application/serializer';
import DS from 'ember-data';

// export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
// });

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    types: {serialize: 'ids', deserialize: 'records'},
    abilities: {serialize: 'ids', deserialize: 'records'},
    pokemon_stats: {serialize: 'ids', deserialize: 'records'}
  },
});
