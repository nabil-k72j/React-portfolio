import React from 'react'
import './Projects.css'

const Projects = () => {

    const ProjectsInfo = [
        { id : 1, name: "GPT-3", img : "/gpt-3.png", desc : "GPT-3 is a Fully responsive single page App built using ReactJs." },
        { id : 2, name: "Academia", img : "/academia.png", desc : "Academia is a fully responsive Landing page for a university built using ReactJs." },
        { id : 3, name: "Tourly", img : "/Tourly.png", desc : "Tourly is fully responsive travel website, Responsive for all devices, built using HTML, CSS, and JavaScript." },
        { id : 4, name: "Streamit", img : "/Streamit.png", desc : "Streamit is a fully responsive Netflix clone built using ReactJs." }]

  return (
    <div className='projects'>

        <h1 className='project-header' data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">Projects</h1>

        <div className='projects-container'>

            {ProjectsInfo.map((ProjectInfo) => (
                <div key={ProjectInfo.id} className="project-element"  data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">

                    <img src={ProjectInfo.img} alt={ProjectInfo.name} />

                        <h1>{ProjectInfo.name}</h1>

                        <p>{ProjectInfo.desc}</p>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Projects