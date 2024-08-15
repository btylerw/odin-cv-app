import { useState } from "react";
import '../styles/GenInfo.css'

function GenInfo({ personalInfo, setPersonalInfo, objective, setObjective, educationInfo, setEducationInfo, workInfo, setWorkInfo, skillInfo, setSkillInfo }) {
    return (
        <>
            <div className="GenInfoContainer">
                <div>
                    <h1>{personalInfo.firstName}<span> {personalInfo.lastName}</span></h1>
                    <p>{personalInfo.jobTitle}</p>
                    <p>{personalInfo.number}</p>
                    <p>{personalInfo.email}</p>
                </div>
                <div>
                    <h2>Objective</h2>
                    <p>{objective}</p>
                    <h2>Education</h2>
                    <p>{educationInfo.school}</p>
                    <p>{educationInfo.degree}</p>
                    <h2>Skills</h2>
                    <p>{skillInfo.skill1}</p>
                    <p>{skillInfo.skill2}</p>
                    <p>{skillInfo.skill3}</p>
                    <h2>Work Experience</h2>
                    <p>{workInfo.job1}</p>
                    <p>{workInfo.job2}</p>
                </div>
            </div>
        </>
    )
}

export default GenInfo;
