import { useState } from 'react'
import './App.css'
import './components/GenInfo'
import './components/GenInfoForm'
import GenInfo from './components/GenInfo';
import GenInfoForm from './components/GenInfoForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Tyler',
    lastName: 'Brown',
    jobTitle: 'Software Developer',
    number: '888-555-5555',
    email: 'brown.tyler.w@gmail.com'
  });

  const [objective, setObjective] = useState('')

  const [educationInfo, setEducationInfo] = useState({
    school: 'California State University, Bakersfield',
    degree: 'Computer Science'
  })

  const [workInfo, setWorkInfo] = useState({
    job1: 'Freelance Developer',
    job2: 'Intern at Tech Company'
  })

  const [skillInfo, setSkillInfo] = useState({
    skill1: 'JavaScript',
    skill2: 'Python',
    skill3: 'C++'
  })

  return (
    <>
      <div className='AppContainer'>
        <GenInfoForm 
          personalInfo={personalInfo} 
          setPersonalInfo={setPersonalInfo} 
          objective={objective} 
          setObjective={setObjective}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          workInfo={workInfo}
          setWorkInfo={setWorkInfo}
          skillInfo={skillInfo}
          setSkillInfo={setSkillInfo} 
          />
        <GenInfo           
          personalInfo={personalInfo} 
          setPersonalInfo={setPersonalInfo} 
          objective={objective} 
          setObjective={setObjective}
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          workInfo={workInfo}
          setWorkInfo={setWorkInfo}
          skillInfo={skillInfo}
          setSkillInfo={setSkillInfo} 
          />
      </div>
    </>
  )
}

export default App
