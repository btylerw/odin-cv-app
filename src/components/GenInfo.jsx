import { useState } from "react";
import '../styles/GenInfo.css'

function GenInfo({ personalInfo, objective, educationInfo, workInfo, skillInfo }) {
    return (
        <>
            <div className="GenInfoContainer">
                <div className="HeaderContainer">
                    <div>
                        <h1>{personalInfo.firstName}<span> {personalInfo.lastName}</span></h1>
                        <p>{personalInfo.jobTitle}</p>
                    </div>
                    <div>
                        <p>{personalInfo.number}</p>
                        <p>{personalInfo.email}</p>                
                    </div>
                </div>
                <div className="BodyContainer">
                    <h2>Objective</h2>
                    <p>{objective}</p>
                    <div className="InfoContainer">
                        <div>
                            <h2>Education</h2>
                            <p>{educationInfo.school}</p>
                            <p>{educationInfo.degree}</p>
                            <h2>Skills</h2>
                            <ul>
                                <li>{skillInfo.skill1}</li>
                                <li>{skillInfo.skill2}</li>
                                <li>{skillInfo.skill3}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Work Experience</h2>
                            <p>{workInfo.job1}</p>
                            <p>{workInfo.job2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenInfo;
