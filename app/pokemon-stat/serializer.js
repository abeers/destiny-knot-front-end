import ApplicationSerializer from 'destiny-knot/application/serializer';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    stat: {serialize: 'ids', deserialize: 'records'},
  },
});
