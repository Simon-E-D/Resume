import { useEffect, useState } from "react";
import "./resume.css";
import "../css/general.css";
import "../css/fonts.css";
import "../css/lineHeights.css";
import SkillsTemplate from '../resumeInfo/SkillsTemplate';
import * as Info from "../resumeInfo/Info";
import Phone from "../icons/phone.svg"
import Github from "../icons/github.svg"
import Mail from "../icons/mail.svg"
import Linkedin from "../icons/linkedin.svg"

function Resume () {
    const [name] = useState({
        firstName: "Simon",
        lastName: "Dilger",
    })

    const [skills, updateSkills] = useState({
        front : Info.frontEnd,
        mappedFront : [],
        back : Info.backEnd,
        mappedBack : [],
        tools : Info.tools,
        mappedTools : [],
    })

    useEffect(() => {
        let front = skills.front;
        let back = skills.back;
        let tools = skills.tools;
    
        updateSkills((prevState)=>{
            const pd = { ...prevState }
            pd.front = front;
            pd.mappedFront = front.map(mapSkills)

            pd.back = back;
            pd.mappedBack = back.map(mapSkills)

            pd.tools = tools;
            pd.mappedTools = tools.map(mapSkills)

            return pd;
        })
    }, []);

    const mapSkills = (aSkill, index) => {
        return (
            <SkillsTemplate
                key = {index}
                skill = {aSkill}
            />
        );
    };

    const fullName = `${name.firstName} ${name.lastName}`;
    return (<>
    <div id="resumePage" className="paper-width center wrap">
        <div className="side-bar">

            <div className="resumeHeader">
                <h1 
                id="name" 
                className="f-Dio w25 fw-5 resume-shrink lh90"
                style={{textTransform: "uppercase"}}
                > {fullName} 
                </h1>
                <h2 id="jobTitle"
                className="f-Dio fw-1 resume-shrink lh90"
                style={{marginTop: "5px"}}
                >FULL STACK SOFTWARE DEVELOPER
                </h2>
            </div>
            <div className="resumeContacts">
                <div className="m1">
                    <h5 id="phoneNumber" className="wrap resume-shrink">
                        <img
                        src={Phone}
                        alt="phoneImg"
                        className="contactImg wrap contact-alignY"
                        />
                        <a 
                        href="tel:3237400550"
                        className="wrap"
                        >
                            <h5 
                            className="wrap 
                            contact-alignY 
                            pl-1 
                            f-Cal"
                            > (323) 740-0550
                            </h5>
                        </a>
                    </h5>
                    <h5 id="email" className="wrap m1 resume-shrink">
                        <img 
                        src={Mail}
                        alt="emailImg"
                        className="contactImg wrap contact-alignY"
                        />
                        <a
                        href="mailto: dilgerse@gmail.com"
                        >
                            <h5
                            className="wrap 
                            contact-alignY 
                            pl-1 
                            f-Cal"
                            > dilgerse@gmail.com
                            </h5>
                        </a>
                        
                    </h5>
                    <h5 id="gitHub" className="wrap m1 resume-shrink">
                        <img 
                        src={Github}
                        alt="gitImg"
                        className="contactImg wrap contact-alignY"
                        />
                        <a href="https://github.com/Simon-E-D"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <h5
                            className="wrap 
                            contact-alignY 
                            pl-1 
                            f-Cal"
                            > /Simon-E-D
                            </h5>
                        </a>
                    </h5>
                    <h5 id="linkedIn" className="wrap m1 resume-shrink">
                        <img
                        src={Linkedin}
                        alt="linkedImg"
                        className="contactImg wrap contact-alignY"
                        />
                        <a 
                        href="https://www.linkedin.com/in/simon-e-dilger"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <h5
                            className="wrap 
                            contact-alignY 
                            pl-1 
                            f-Cal"
                            > /simon-e-dilger
                            </h5>
                        </a>
                    </h5>
                </div>
            </div>
            <div className="resumeSkills">
                <h3 className="resume-cat">
                    Skills
                </h3>
                <div>
                    <div id="Front" className="shrink-margin">
                        <h3 className="shrink-margin fw-5 lh90 tb-margin"> FRONT END   </h3>
                        {skills.mappedFront}
                    </div>
                    <div id="Back" className="shrink-margin">
                        <h3 className="shrink-margin fw-5 lh90 tb-margin"> BACK END   </h3>
                        {skills.mappedBack}
                    </div>
                    <div id="Tools" className="shrink-margin">
                        <h3 className="shrink-margin fw-5 lh90 tb-margin"> TOOLS / GENERAL DEVELOPMENT   </h3>
                        {skills.mappedTools}
                    </div>
                </div>
            </div>

        </div> 
        <div className="main-body">

        <div className="resumeExperience">
        <h2 className="shrinkB-1 resume-cat"> Employment </h2>
        <div>
            <div id="miVet">
                <div id="info">
                    <div className="wrap shrink-gap shrinkB-2">
                        <h4>MiVet</h4>
                        <h4 className="m1"> Remote </h4>
                        <h4 className="m1"> Sept 2022 - Dec 2022 </h4>
                    </div>
                    <h4 className="shrink-gap"> Full-Stack Software Developer </h4>
                    <h4 className="shrink-gap"> MiVet is a web application designed to be a all in one application for mobile Equine vetenarians. </h4>
                </div>
                <div id="tasks">
                    <p>
                        <b>•</b> Designed and implemented database structures, including tables and stored procedures, utilizing 
                        foreign key relationships to ensure data integrity within the SQL Database.
                    </p>
                    <p>
                        <b>•</b> Collaborated with team members to effectively resolve complex data-joining issues across the 
                        database, ensuring seamless access to necessary information.
                    </p>
                    <p>
                        <b>•</b> Designed custom models, domains, interfaces, services, and API endpoints using .NET Core framework 
                        and C# language to connect front-end and back-end functionality.
                    </p>
                    <p>
                        <b>•</b> Developed a user-friendly paginated interface for the management and retrieval of files by both 
                        Veterans and Administrators.
                    </p>
                    <p>
                        <b>•</b> Worked with a team of developers to produce highly responsive web pages to enrich UX, utilizing 
                        ReactJS and various related libraries such as Yup, Formik, React BootStrap, and SweetAlert, to ensure 
                        functionality and aesthetics.
                    </p>
                    <p>
                        <b>•</b> Participated in daily stand-ups using AGILE/SCRUM methodologies and peer code reviews to ensure all 
                        code was within standards and specifications of the team. 
                    </p>
                    <p>
                        <b>•</b> Implemented and maintained a robust version control system utilizing Git and GitHub, promoting code 
                        quality and collaboration among peers to ensure workflow continuity.
                    </p>
                    <p>
                        <b>•</b> Conducted thorough code reviews, executed pull requests, and provided technical guidance to ensure 
                        consistency, quality, and optimal performance of project deliverables. Assisted colleagues in resolving 
                        any issues related to code merging.
                    </p>
                </div>
            </div>
            <div id="seesCandies">
                <div id="info">
                    <div className="wrap shrinkB-2">
                        <h4> See's Candies: </h4> 
                        <h4> Nov 2020 - June 2023 </h4>
                    </div>
                <h4>Manager</h4>
                <h4> See's Candies is a confectionery company that specializes in chocolates, truffles, and other sweet treats. </h4>
                </div>
            <div id="tasks">
                <p> 
                    <b>•</b> Effectively managed and assigned tasks, utilizing delegation strategies to
                    ensure completion of all objectives by the end of the day.

                </p>
                <p> 
                    <b>•</b>  Decreased downtime of any frozen or crashed machine by 5 minutes
                    increasing sales.

                </p>
                <p> 
                    <b>•</b> Resolved technical issues related to connectivity between multiple devices,
                    enabling the successful restart of production operations.
                </p>
            </div>
            </div>
        </div>
        </div>

        <div className="resumeProjects">
        <h3 className="resume-cat"> Projects </h3>
        <div>
            <div id="reactResume">
                <h4 className="m1"> ReactResume: A copy of my resume programmed as a React/jsx component files. </h4>
                    <p>
                        <b>•</b> Funcntional contact buttons taking the viewer to the proper page.
                    </p>
                    <p>
                        <b>•</b> Functional page navigation from a landing page to the resume itself on the click of the button.
                    </p>
            </div>
        </div>
        </div>
        </div>
            
    </div>



    
     
    </>);
}

export default Resume;