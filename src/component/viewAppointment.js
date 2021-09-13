import React, { Component }  from 'react';

import { TableDataView, dummyDataTableSource, dummyDataTableColumns } from "./dataTable"
export default function ViewAppointment() {
    return (
        < TableDataView title="View Appointments" dataSource={dummyDataTableSource} columns={dummyDataTableColumns} />
    )
}