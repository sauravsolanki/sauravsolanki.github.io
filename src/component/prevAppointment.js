import React, { Component }  from 'react';

import { TableDataView, dummyDataTableSource, dummyDataTableColumns } from "./dataTable"
export default function PrevAppointment() {
    return (
        < TableDataView title="Prev Appointments" dataSource={dummyDataTableSource} columns={dummyDataTableColumns} />
    )
}