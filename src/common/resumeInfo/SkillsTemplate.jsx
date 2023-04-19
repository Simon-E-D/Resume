import React from "react";

function SkillsTemplate (props) {
    return( 
    <>
        <p className="shrink-margin fw-5 lh100">
             {props.skill} 
        </p>
    </>
    )
}

export default SkillsTemplate;