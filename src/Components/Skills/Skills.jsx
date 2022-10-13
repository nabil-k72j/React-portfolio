import React from 'react'
import './Skills.css'
import { SkillsInfo } from './skillMap'

const Skills = () => {
  return (
    <div className='skills'>

        <h1 className='name' data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">Skills</h1>

        <div className='skill-container'>

            {SkillsInfo.map((SkillInfo) =>(
              <div className='skill-element' key={SkillInfo.id} data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">

                <img src={SkillInfo.logo} alt={SkillInfo.name} width="60px"/>

                <h1>{SkillInfo.name}</h1>

                <p className='skill-param'>{SkillInfo.desc}</p>

              </div>
            ))}

        </div>

    </div>
  )
}

export default Skills