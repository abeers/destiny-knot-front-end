import ApplicationSerializer from 'destiny-knot/application/serializer';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    pokemon: {serialize: 'ids', deserialize: 'records'},
    user: {serialize: 'ids', deserialize: 'records'}
  },
});
