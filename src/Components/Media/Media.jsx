import React from 'react'
import './Media.css'

const Media = () => {

    const Medialinks = [
        { id : 1, name : "Instagram", class : "fa-brands fa-instagram", link : "https://www.instagram.com/_nabil_malki_/"},
        { id : 2, name : "Github", class : "fa-brands fa-github", link : "https://github.com/nabil-k72j"},
        { id : 3, name : "Linkedin", class : "fa-brands fa-linkedin", link : "https://www.linkedin.com/in/nabil-malki-352a15245/"},
        { id : 4, name : "Telegram", class : "fa-brands fa-telegram", link : "https://t.me/The_Nabil_Malki"} ]

  return (
    <div className='media'>

        {Medialinks.map((MediaLink) => (
            <a target="__blank" className={`media-link ${MediaLink.name}`} href={MediaLink.link} key={MediaLink.id} data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">

                <i className={MediaLink.class}></i>

                <p>{MediaLink.name}</p>

            </a>
        ))}

    </div>
  )
}

export default Media