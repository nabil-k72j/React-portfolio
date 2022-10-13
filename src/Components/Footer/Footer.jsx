import './Footer.css'

const Footer = () => {

    const Medialinks = [
        { id : 1, name : "Instagram", class : "fa-brands fa-instagram", link : "https://www.instagram.com/_nabil_malki_/"},
        { id : 2, name : "Github", class : "fa-brands fa-github", link : "https://github.com/nabil-k72j"},
        { id : 3, name : "Linkedin", class : "fa-brands fa-linkedin", link : "https://www.linkedin.com/in/nabil-malki-352a15245/"},
        { id : 4, name : "Telegram", class : "fa-brands fa-telegram", link : "https://t.me/The_Nabil_Malki"} ]

  return (
    <div className='footer' data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">

        <a href="#hero" className='back-to-top'><p>Back to top</p> <i className="fa-solid fa-arrow-up"></i></a>

        <div className='media-links-container'>

            {Medialinks.map((MediaLink) => (
            <a target="__blank" className="call-to-action" href={MediaLink.link} key={MediaLink.id}>

                <i className={MediaLink.class}></i>

            </a>
            ))}

        </div>

        <p className='dev-credit'>Developed by <span>Nabil Malki</span> using <span>ReactJs</span>.</p>

    </div>
  )
}

export default Footer