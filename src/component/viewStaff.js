import React, { Component }  from 'react';

import { TableDataView, dummyDataTableSource, dummyDataTableColumns } from "./dataTable"
export default function ViewStaff() {
    return (
        < TableDataView title="View Staff" dataSource={dummyDataTableSource} columns={dummyDataTableColumns} />
    )
}