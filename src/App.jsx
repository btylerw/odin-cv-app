import { useState } from 'react'
import './App.css'
import './components/GenInfo'
import './components/GenInfoForm'
import defaultData from './defaultData'
import GenInfo from './components/GenInfo';
import GenInfoForm from './components/GenInfoForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultData.personalInfo);

  const [objective, setObjective] = useState(defaultData.objective);

  const [educationInfo, setEducationInfo] = useState(defaultData.educationInfo);

  const [workInfo, setWorkInfo] = useState(defaultData.workInfo);

  const [skillInfo, setSkillInfo] = useState(defaultData.skillInfo);

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
          objective={objective}
          educationInfo={educationInfo}
          workInfo={workInfo}
          skillInfo={skillInfo}
          />
      </div>
    </>
  )
}

export default App
