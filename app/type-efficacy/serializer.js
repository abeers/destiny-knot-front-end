import ApplicationSerializer from 'destiny-knot/application/serializer';
import DS from 'ember-data';

// export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
// });

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    target_type: {serialize: 'ids', deserialize: 'records'},
  },
});
