declare module "@salesforce/apex/PSBulkActionController.executeSAQLQuery" {
  export default function executeSAQLQuery(param: {query: any}): Promise<any>;
}
declare module "@salesforce/apex/PSBulkActionController.getFieldDefs" {
  export default function getFieldDefs(param: {configName: any, sobjectPrefix: any, fields: any}): Promise<any>;
}
declare module "@salesforce/apex/PSBulkActionController.updateRecords" {
  export default function updateRecords(param: {sobjectDef: any, ids: any}): Promise<any>;
}
declare module "@salesforce/apex/PSBulkActionController.getBulkEditConfig" {
  export default function getBulkEditConfig(param: {configName: any}): Promise<any>;
}
declare module "@salesforce/apex/PSBulkActionController.postChatter" {
  export default function postChatter(param: {sobjectName: any, users: any, mentionOwners: any, groups: any, post: any, ids: any}): Promise<any>;
}
declare module "@salesforce/apex/PSBulkActionController.createTasks" {
  export default function createTasks(param: {subject: any, description: any, type: any, ownerId: any, dueDate: any, status: any, priority: any, sobjectName: any, recordOwner: any, ids: any}): Promise<any>;
}
