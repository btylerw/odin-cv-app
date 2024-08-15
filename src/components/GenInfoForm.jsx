import '../styles/GenInfoForm.css'

function GenInfoForm({ personalInfo, setPersonalInfo, objective, setObjective, educationInfo, setEducationInfo, workInfo, setWorkInfo, skillInfo, setSkillInfo }) {
    const handleFirstNameChange = (fname) => {
        setPersonalInfo({...personalInfo, firstName: fname});
    }
    const handleLastNameChange = (lname) => {
        setPersonalInfo({...personalInfo, lastName: lname});
    }
    const handleTitleChange = (title) => {
        setPersonalInfo({...personalInfo, jobTitle: title});
    }
    const handleNumberChange = (number) => {
        setPersonalInfo({...personalInfo, number: number});
    }

    const handleEmailChange = (email) => {
        setPersonalInfo({...personalInfo, email: email})
    }
    const handleSchoolChange = (school) => {
        setEducationInfo({...educationInfo, school: school});
    }
    const handleDegreeChange = (degree) => {
        setEducationInfo({...educationInfo, degree: degree});
    }
    const handleSkill1Change = (skill1) => {
        setSkillInfo({...skillInfo, skill1: skill1});
    }
    const handleSkill2Change = (skill2) => {
        setSkillInfo({...skillInfo, skill2: skill2});
    }
    const handleSkill3Change = (skill3) => {
        setSkillInfo({...skillInfo, skill3: skill3});
    }
    const handleJob1Change = (job1) => {
        setWorkInfo({...workInfo, job1: job1});
    }
    const handleJob2Change = (job2) => {
        setWorkInfo({...workInfo, job2: job2});
    }
    function handleObjectiveChange(e) {
        setObjective(e.target.value);
    }



    return (
        <>
            <div className="GenInfoForm">
                <h3>First Name</h3>
                <input type="text" placeholder="Tyler" onChange={(event) => handleFirstNameChange(event.target.value)}/>
                <h3>Last Name</h3>
                <input type="text" placeholder="Brown" onChange={(event) => handleLastNameChange(event.target.value)}/>
                <h3>Job Title</h3>
                <input type="text" placeholder="Software Developer" onChange={(event) => handleTitleChange(event.target.value)}/>
                <h3>Phone Number</h3>
                <input type="text" placeholder="888-555-5555" onChange={(event) => handleNumberChange(event.target.value)}/>
                <h3>Email</h3>
                <input type="text" placeholder="brown.tyler.w@gmail.com" onChange={(event) => handleEmailChange(event.target.value)}/>
                <h3>Objective</h3>
                <textarea name="" id="" onChange={handleObjectiveChange}/>
                <h3>School</h3>
                <input type="text" onChange={(event) => handleSchoolChange(event.target.value)}/>
                <h3>Degree</h3>
                <input type="text" onChange={(event) => handleDegreeChange(event.target.value)}/>
                <h3>Job 1</h3>
                <input type="text" onChange={(event) => handleJob1Change(event.target.value)}/>
                <h3>Job 2</h3>
                <input type="text" onChange={(event) => handleJob2Change(event.target.value)}/>
                <h3>Skill 1</h3>
                <input type="text" onChange={(event) => handleSkill1Change(event.target.value)}/>
                <h3>Skill 2</h3>
                <input type="text" onChange={(event) => handleSkill2Change(event.target.value)}/>
                <h3>Skill 3</h3>
                <input type="text" onChange={(event) => handleSkill3Change(event.target.value)}/>
            </div>
        </>
    )
}

export default GenInfoForm;