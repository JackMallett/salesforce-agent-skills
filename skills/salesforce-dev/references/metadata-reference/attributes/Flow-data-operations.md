# Flow — Data Operations (Record CRUD)

## FlowInputFieldAssignment

Assigns the value for a record field based on a resource or static value. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| field | string | Required. The name of the field to assign a value to when a record is created or updated. |
| value | FlowElementReferenceOrValue | The value to assign to the field. |

## FlowOutputFieldAssignment

Assigns a record field’s value to a variable that can be used elsewhere in the flow. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignToReference | string | Required. Reference to the variable where you want to store the value of the record field. |
| field | string | Required. Name of the field whose value is to be assigned after a record lookup. |

## FlowRelatedRecordLookup (Beta)

Finds records in the database that are related to the records specified in FlowRecordLookup and stores their field values in the flow. Corresponds to a Get Records element in Flow Builder. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| filterLogic | string | The filter logic that’s applied to the filter condition requirements. To require all conditions, use AND. To require any conditions, use OR. For custom condition logic, enter the entire logic string. For example, 1 AND 2 OR (3 AND 4). |
| filters | FlowRecordFilter[] | An array that specifies the criteria used to select the record from the database.If the filters return more than one record, they’re sorted according to the specified sortField and sortOrder. If outputReference specifies a non-collection record variable or if getFirstRecordOnly is true, only the first record in the sorted list is selected. If sortField or sortOrder isn’t specified, records aren’t returned in any particular order. If outputReference specifies a non-collection record variable or if getFirstRecordOnly is true, only the first record in the unsorted list is selected. |
| getFirstRecordOnly | boolean | Indicates whether to store field values for only one record, even when multiple records meet the filter criteria. Supported only when storeOutputAutomatically is true. When storeOutputAutomatically is false, what determines whether one or multiple records are stored is whether outputReference specifies a record variable or a record collection variable. |
| limit | FlowElementReferenceOrValue | Specifies the maximum number of records to store. Valid values are between 2 and 20,000. Supported only when getFirstRecordOnly is false. |
| queriedFields | strings[] | An array that specifies which fields from the selected record are saved to the specified record variable. |
| relatedObject | string | Name of the related object from which to select related records. |
| relatedRecords | FlowRelatedRecordLookup[] | An array that specifies the related records to look up in the database. |
| relationshipField | string | Specifies the API name of the relationship field used to link the object to its related object. This field is required for retrieving related records. |
| sortField | string | The field that’s used for sorting the records that meet the filter criteria. If this field isn’t specified, the returned records aren’t sorted.You can only sort records by fields that have the Sort API field property, as specified in SOAP API. |
| sortOrder | SortOrder (enumeration of type string) | Order in which to sort the records. If this field isn’t specified, then the results aren’t sorted.Valid values are: Asc—Ascending Desc—Descending |

## FlowRecordCreate

Create a record in the database using values from the flow. It extends FlowNode and inherits all its properties.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignRecordIdToReference | string | Reference to the variable where you want to store the ID after the record is created. |
| connector | FlowConnector | Specifies which node to execute after creating the record. |
| doesUpsert | boolean | Indicates whether the element creates or updates records. The default value is false, indicating that the element only creates records. This field is available in API version 62.0 and later. |
| doesUpsertAllOrNone | boolean | Indicates whether the element creates or updates records only if all records are created or updated successfully. If set to true and a record fails, then the transaction rolls back and no records are created or updated.If set to false, the transaction creates or updates only the records that are successful. The default value is true. This field is available in API version 62.0 and later. |
| faultConnector | FlowConnector | Specifies which node to execute if the attempt to create a record results in an error. |
| filterLogic | string | The filter logic applied to the filter condition requirements. To require all conditions, use AND. To require any conditions, use OR. For custom condition logic, enter the entire logic string. For example, 1 AND 2 OR (3 AND 4). This field is available in API version 61.0 and later. |
| filters | FlowRecordFilter[] | An array that specifies the criteria to select which records to create or update in the database.This field is available in API version 61.0 and later. |
| inputAssignments | FlowInputFieldAssignment[] | An array that assigns values to the specified fields of the record being created. |
| inputReference | string | Specifies the record variable whose field values are used to populate the new record’s fields. |
| object | string | Required. The object type that the element creates. |
| operationMultMatchingRecords | string | The operation to perform if multiple matching records are found. Valid values are: None UpdateAllRecords UpdateLatestRecord This field is available in API version 61.0 and later. |
| operationOneMatchingRecord | string | The operation to perform if one matching record is found. Valid values are: None UpdateAllRecords This field is available in API version 61.0 and later. |
| operationZeroMatchingRecords | string | The operation to perform if no matching records are found. Valid values are: None This field is available in API version 61.0 and later. |
| storeOutputAutomatically | boolean | Indicates whether the record ID is automatically available in the flow without creating any variables. When the value is true, you can reference the record ID by specifying the API name of the Create Records element in the flow. The default value is false. When the value is false, create a variable to store the record ID.This field is available in API version 48.0 and later. |
| upsertExternalIdField | string | If doesUpsert is true, specifies the external ID field on the record. You can provide a value for this property or for the Upsert Standard ID Field property, but not both. This field is available in API version 62.0 and later. |
| upsertStandardIdField | string | If doesUpsert is true, specifies the standard ID field like Account ID on the object. You can provide a value for this property or for the Upsert External ID Field property, but not both. This field is available in API version 62.0 and later. |

## FlowRecordDelete

Deletes one or more records in the database. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after deleting the record. |
| faultConnector | FlowConnector | Specifies which node to execute if the attempt to delete a record results in an error. |
| filters | FlowRecordFilter[] | An array that specifies the criteria used to select which records to delete from the database. For example, delete accounts whose last activity was older than a specified date. |
| inputReference | string | Specifies the record variable whose record ID is used to identify which record to delete in the database. |
| object | string | Required. The name of the object whose records are deleted. |

## FlowRecordFilter

Sets the criteria for searching records in the database. It extends FlowBaseElement and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| field | string | Required. The field to be used for filtering records. |
| operator | FlowRecordFilterOperator (enumeration of type string) | Required. Valid values are: EqualTo NotEqualTo GreaterThan LessThan GreaterThanOrEqualTo LessThanOrEqualTo StartsWith EndsWith Contains IsNull |
| value | FlowElementReferenceOrValue | Reference or value used with the field and operator to filter records. |

## FlowRecordLookup

Finds records in the database and stores their field values in the flow. Corresponds to a Get Records element in Flow Builder. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| assignNullValuesIfNoRecordsFound | boolean | Specifies that all values are set to null when no record is found. Supported only when storeOutputAutomatically is false.This field is available in API version 30.0 and later. |
| connector | FlowConnector | Specifies which node to execute after getting records from the database. |
| faultConnector | FlowConnector | Specifies which node to execute if the attempt to get records results in an error. |
| filterLogic | string | The filter logic that’s applied to the filter condition requirements. To require all conditions, use AND. To require any conditions, use OR. For custom condition logic, enter the entire logic string. For example, 1 AND 2 OR (3 AND 4). This field is available in API version 50.0 and later. |
| filters | FlowRecordFilter[] | An array that specifies the criteria used to select the record from the database.If the filters return more than one record, they’re sorted according to the specified sortField and sortOrder. If outputReference specifies a non-collection record variable or if getFirstRecordOnly is true, only the first record in the sorted list is selected. If sortField or sortOrder isn’t specified, records aren’t returned in any particular order. If outputReference specifies a non-collection record variable or if getFirstRecordOnly is true, only the first record in the unsorted list is selected. |
| getFirstRecordOnly | boolean | Indicates whether to store field values for only one record, even when multiple records meet the filter criteria. Supported only when storeOutputAutomatically is true. When storeOutputAutomatically is false, what determines whether one or multiple records are stored is whether outputReference specifies a record variable or a record collection variable.This field is available in API version 47.0 and later. |
| limit | FlowElementReferenceOrValue | Specifies the maximum number of records to store. Valid values are between 2 and 20,000. Supported only when getFirstRecordOnly is false.This field is available in API version 63.0 and later. |
| object | string | Name of the object from which to select the record. |
| outputAssignments | FlowOutputFieldAssignment[] | An array that assigns fields from the selected record to variables that can be used elsewhere in the flow. Supported only when storeOutputAutomatically is false. |
| outputReference | string | Specifies the record variable or record collection variable that stores the queried fields’ values. Supported only when storeOutputAutomatically is false. |
| queriedFields | string[] | An array that specifies which fields from the selected record are saved to the specified record variable. |
| relatedRecords | FlowRelatedRecordLookup[] | An array that specifies the related records to look up in the database. |
| sortField | string | The field that’s used for sorting the records that meet the filter criteria. If this field isn’t specified, the returned records aren’t sorted.You can only sort records by fields that have the Sort API field property, as specified in SOAP API. This field is available in API version 25.0 and later. |
| sortOrder | SortOrder (enumeration of type string) | Order in which to sort the records. If this field isn’t specified, then the results aren’t sorted.Valid values are: Asc—Ascending Desc—Descending This field is available in API version 25.0 and later. |
| storeOutputAutomatically | boolean | Indicates whether the returned records’ field values are automatically available in the flow without creating any variables. When the value is true, the flow can reference a field by specifying the name of the Get Records element and the record field, such as Get_Contacts.AccountId. Supported only when processType is Flow or AutoLaunchedFlow.This field is available in API version 47.0 and later. |

## FlowRecordRollback

Rolls back the current transaction and cancels its pending record changes. Corresponds to the Roll Back Records element in Flow Builder. Available only in screen flows. FlowRecordRollback extends FlowNode and inherits all its fields. This metadata type is available in API version 52.0 and later.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after rolling back the current transaction. |

## FlowRecordUpdate

Finds records in the database and updates them with values from the flow. It extends FlowNode and inherits all its fields.

| Field Name | Field Type | Description |
|------------|------------|-------------|
| connector | FlowConnector | Specifies which node to execute after completing the record update. |
| faultConnector | FlowConnector | Specifies which node to execute if the attempt to update a record results in an error. |
| filters | FlowRecordFilter[] | An array that specifies the criteria used to select the records to update in the database. |
| inputAssignments | FlowInputFieldAssignment[] | An array that assigns values to the specified fields of the record being updated. |
| inputReference | string | Specifies the record variable whose field values are used to update the record’s fields. |
| object | string | Required. Name of the object whose records are updated. |
