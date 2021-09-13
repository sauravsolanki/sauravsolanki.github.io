import React, { Component } from 'react';

import { PageUnderConstructionView } from "./pageUnderConstruction"
// Page under COnstruction
const dummyUnderConstructionData =
{
    img: underConstruction,
    title: "Tech Team"
}



export default function ViewTechTeam() {
    return (
        <PageUnderConstructionView {...dummyUnderConstructionData} />
    )
}