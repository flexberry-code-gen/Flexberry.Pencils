import { Serializer as PencilSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pencils-pencil';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PencilSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
