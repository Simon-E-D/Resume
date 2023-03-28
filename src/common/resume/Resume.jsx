import { useEffect, useState } from "react";
import "./resume.css";
import "../general.css";
import SkillsTemplate from "../resumeInfo/SkillsTemplate";
import * as Info from "../resumeInfo/Info";

function Resume () {
    const [name] = useState({
        firstName: "Simon",
        lastName: "Dilger",
    })

    const [skills] = useState({
        front : Info.frontEnd,
        mappedFront : [],
        back : Info.backEnd,
        mappedBack : [],
        tools : Info.tools,
        mappedTools : [],
    })

    useEffect(() => {
        <SkillsTemplate 
            skills = {Info.frontEnd}
        />
    })

    console.log("Skills state", skills)

    const fullName = `${name.firstName} ${name.lastName}`;
    return (<>
    <div id="resumePage" className="paper-width center wrap">
        <div className="side-bar">

            <div className="resumeHeader">
                <h1 id="name">{fullName}</h1>
                <h2 id="jobTitle">Full stack web developer</h2>
            </div>
            <div className="resumeContacts">
                <h3> Contact info:</h3>
                <div className="m1">
                    <h4 id="phoneNumber" className="wrap">
                        <img
                        src="https://img.freepik.com/free-icon/auricular-phone_318-1028.jpg?w=360"
                        alt="phoneImg"
                        className="contactImg wrap"
                        />
                        <a 
                        href="tel:3237400550"
                        className="wrap"
                        >
                            <h4 
                            className="wrap contact-alignY pl-1">
                            (323) 740-0550
                            </h4>
                        </a>
                    </h4>
                    <h4 id="email" className="wrap m1">
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXZKBkcIMYsvs-msDGDcOl2lmlTLUZuJuGQ&usqp=CAU"
                        alt="emailImg"
                        className="contactImg wrap"
                        />
                        <a
                        href="mailto: dilgerse@gmail.com"
                        >
                            <h4
                            className="contact-alignY pl-1">
                                dilgerse@gmail.com
                            </h4>
                        </a>
                        
                    </h4>
                    <h4 id="gitHub" className="wrap m1">
                        <img 
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        alt="gitImg"
                        className="contactImg wrap"
                        />
                        <a href="https://github.com/Simon-E-D"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <h4
                            className="contact-alignY pl-1">
                            /Simon-E-D
                            </h4>
                        </a>
                    </h4>
                    <h4 id="linkedIn" className="wrap m1">
                        <img
                        src="data:image/png;base64,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" 
                        alt="linkedImg"
                        className="contactImg wrap"
                        />
                        <a 
                        href="https://www.linkedin.com/in/simon-e-dilger"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <h4
                            className="contact-alignY pl-1">
                            /simon-e-dilger
                            </h4>
                        </a>
                    </h4>
                </div>
            </div>
            <div className="resumeSkills">
                <h3>
                Skills
                </h3>
                <div className="m1">
                    <div id="Front" className="shrink-margin">
                        <h4 className="shrink-margin"> Front End:</h4>
                        <h5 className="pl-1 shrink-margin">
                            React
                        </h5>
                        <h4 className="pl-1 shrink-margin">
                            JavaScript,
                        </h4>
                        <h4 className="pl-1 shrink-margin">
                            HTML5,
                        </h4>
                        <h4 className="pl-1 shrink-margin">
                            CSS,
                        </h4>
                        <h4 className="pl-1 shrink-margin">
                            Bootstrap,
                        </h4> 
                        <h4 className="pl-1 shrink-margin">
                            AJAX, 
                        </h4>
                        <h4 className="pl-1 shrink-margin">
                            jQuery.
                        </h4>
                    </div>
                    <div id="Back" className="shrink-margin">
                        <h4 className="shrink-margin"> Back End:</h4>
                        <h4 className="pl-1 shrink-margin">
                            SQL / TSQL, C#, .Net, .Net Core, ASP.Net, ADO, Web API.
                        </h4>
                    </div>
                    <div id="Tools" className="shrink-margin">
                        <h4 className="shrink-margin"> General development: </h4>
                        <h4 className="pl-1 shrink-margin">
                            Visual Studio, VS Code, SSMS, Postman, GitHub, Git Bash, NPM, Yarn, Chrome Dev Tools, AGILE / Scrum methodologies.
                        </h4>
                    </div>
                </div>
            </div>

        </div> 
        <div className="main-body">

        <div className="resumeExperience">
        <h3 className="shrinkB-1"> Experience </h3>
        <div>
            <div id="miVet">
                <div className="m1">
                    <div className="wrap shrink-gap shrinkB-2">
                        <h4>MiVet</h4>
                        <h4 className="m1"> Remote </h4>
                        <h4 className="m1"> Sept 2022 - Dec 2022 </h4>
                    </div>
                    <h4 className="shrink-gap"> Full-Stack Software Developer </h4>
                    <h4 className="shrink-gap"> MiVet is a web application designed to be a all in one application for mobile Equine vetenarians. </h4>
                </div>
                <ol>
                    <ul>
                        <b>•</b> Designed and implemented database structures, including tables and stored procedures, utilizing 
        foreign key relationships to ensure data integrity within the SQL Database.
                    </ul>
                    <ul>
                        <b>•</b> Collaborated with team members to effectively resolve complex data-joining issues across the 
                        database, ensuring seamless access to necessary information.
                    </ul>
                    <ul>
                        <b>•</b> Designed custom models, domains, interfaces, services, and API endpoints using .NET Core framework 
                        and C# language to connect front-end and back-end functionality.
                    </ul>
                    <ul>
                        <b>•</b> Developed a user-friendly paginated interface for the management and retrieval of files by both 
                        Veterans and Administrators.
                    </ul>
                    <ul>
                        <b>•</b> Worked with a team of developers to produce highly responsive web pages to enrich UX, utilizing 
                        ReactJS and various related libraries such as Yup, Formik, React BootStrap, and SweetAlert, to ensure 
                        functionality and aesthetics.
                    </ul>
                    <ul>
                        <b>•</b> Participated in daily stand-ups using AGILE/SCRUM methodologies and peer code reviews to ensure all 
                        code was within standards and specifications of the team. 
                    </ul>
                    <ul>
                        <b>•</b> Implemented and maintained a robust version control system utilizing Git and GitHub, promoting code 
                        quality and collaboration among peers to ensure workflow continuity.
                    </ul>
                    <ul>
                        <b>•</b> Conducted thorough code reviews, executed pull requests, and provided technical guidance to ensure 
                        consistency, quality, and optimal performance of project deliverables. Assisted colleagues in resolving 
                        any issues related to code merging.
                    </ul>
                </ol>
            </div>
            <div id="seesCandies">
            <div className="wrap shrinkB-2">
                <h4 className="m1"> See's Candies: </h4> 
                <h4 className="m1"> Nov 2020 - June 2023 </h4>
            </div>
            <h4 className="m1">Manager</h4>
            <h4 className="m1"> See's Candies is a confectionery company that specializes in chocolates, truffles, and other sweet treats. </h4>
            {/* <ol>
                <ul> 
                    <b>•</b> Effectively managed and assigned tasks, utilizing delegation strategies to ensure completion of all objectives by the end of the day. 
                </ul>
                <ul> 
                    <b>•</b> Decreased downtime of any frozen or crashed machine by 5 minutes.
                </ul>
                <ul> 
                    <b>•</b> Resolved technical issues related to connectivity between multiple devices, enabling the successful restart of production operations. 
                </ul>
            </ol> */}
            </div>
        </div>
        </div>

        <div className="resumeProjects">
        <h3> Projects </h3>
        <div>
            <div id="reactResume">
                <h4 className="m1"> ReactResume: A copy of my resume programmed as a React/jsx component files. </h4>
                <ol>
                    <ul>
                        <b>•</b> Funcntional contact buttons taking the viewer to the proper page.
                    </ul>
                    <ul>
                        <b>•</b> Functional page navigation from a landing page to the resume itself on the click of the button.
                    </ul>
                </ol>
            </div>
        </div>
        </div>
        </div>
            
    </div>



    
     
    </>);
}

export default Resume;