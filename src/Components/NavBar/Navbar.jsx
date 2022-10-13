import './Navbar.css'

const Navbar = () => {

    const navLinks = [
        {id : 1, name: "Home" , href : "#hero" , class : "fa-solid fa-house"},
        {id : 2, name: "Skills" , href : "#skills" , class : "fa-solid fa-wand-magic-sparkles"},
        {id : 3, name: "Projects" , href : "#projects" , class : "fa-solid fa-gears"},
        {id : 4, name: "Contact" , href : "#contact" , class : "fa-solid fa-envelope"}
    ]

  return (
    <nav className='nav'>

        {navLinks.map((navLink) => (
            <a className='navlinks' href={navLink.href} key={navLink.id}>

                <i className={navLink.class}></i>

                <p>{navLink.name}</p>

            </a>
        ))}

    </nav>
  )
}

export default Navbar