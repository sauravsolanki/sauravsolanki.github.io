import React, { Component }  from 'react';

import { PageUnderConstructionView } from "./pageUnderConstruction"
// Page under COnstruction
const dummyUnderConstructionData =
{
    img: underConstruction,
    title: "Emergency Team"
}

export default function ViewEmergencyTeam() {
    return (
        <PageUnderConstructionView {...dummyUnderConstructionData} />
    )
}