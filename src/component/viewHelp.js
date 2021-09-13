import React, { Component }  from 'react';

import { PageUnderConstructionView } from "./pageUnderConstruction"
// Page under COnstruction
const dummyUnderConstructionData =
{
    img: underConstruction,
    title: "Help Team"
}



export default function ViewHelpTeam() {
    return (
        <PageUnderConstructionView {...dummyUnderConstructionData} />
    )
}