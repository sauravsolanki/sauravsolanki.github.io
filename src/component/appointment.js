import React, { Component }  from 'react';

import { TableDataView, dummyDataTableSource, dummyDataTableColumns } from "./dataTable"
export default function Appointment() {
    return (
        < TableDataView title="Appointments" dataSource={dummyDataTableSource} columns={dummyDataTableColumns} />
    )
}