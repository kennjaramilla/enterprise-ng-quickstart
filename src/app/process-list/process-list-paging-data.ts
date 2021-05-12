/* eslint-disable */
export const PAGING_COLUMNS: SohoDataGridColumn[] = [
    { id: 'name',   name: 'Name',   field: 'name',   sortable: true, filterType: 'text' },
    { id: 'type', name: 'Type', field: 'type', sortable: true, filterType: 'text', width: 150 },
    { id: 'version',    name: 'Version',     field: 'version',    sortable: true, filterType: 'text' },
    { id: 'comment',    name: 'Comment',     field: 'comment',    sortable: false, filterType: 'text' },
    { id: 'uploadedBy',       name: 'Uploaded By',        field: 'uploadedBy',       sortable: true, filterType: 'text' },
  ];
  /* eslint-enable */

  export const PAGING_DATA: any[] = [
    {
      id:          0,
      name:   'ReportDocumentAccess',
      type: 'User defined',
      version:    '1.0.2',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          1,
      name:   'TalentScience',
      type: 'User defined',
      version:    '1.0.3',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          2,
      name:   'PayrollSystem',
      type: 'User defined',
      version:    '2.0',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          3,
      name:   'HiringProcessDocument',
      type: 'User defined',
      version:    '3.0.3',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          4,
      name:   'InforProcessAutomation',
      type: 'User defined',
      version:    '1.0.5',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          5,
      name:   'MachineSupport&Tech',
      type: 'User defined',
      version:    '1.0.1',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          6,
      name:   'ManagementSupport',
      type: 'User defined',
      version:    '5.0',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    },
    {
      id:          7,
      name:   'SoftwareEngineeringProcess',
      type: 'User defined',
      version:    '1.0',
      comment:    'Some comment here',
      uploadedBy:       'Admin1',
    }
  ];
