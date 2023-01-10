import { useState } from "react";

function Resume () {
    const [name] = useState({
        firstName: "Simon",
        midName: "E.",
        lastName: "Dilger",
    })

    const fullName = `${name.firstName} ${name.midName} ${name.lastName}`;
    return (<>
    <div className="resumePage">
     <div className="resumeHeader">
        <h1 id="name" className="m1 w25">{fullName}</h1>
        <h2 id="jobTitle" className="m1 w25">Full stack web developer</h2>

     </div>
     <div className="resumeContacts">

     </div>
    </div>
    </>);
}

export default Resume;