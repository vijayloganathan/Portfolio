import React, { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menubtnRef = useRef(null);
  const menuclosebtnRef = useRef(null);
  const sidenavRef = useRef(null);

  const navbarlinksActive = () => {
    const position = window.scrollY + 200; // Added offset for better UX
    
    // Add logic here to update active class based on scroll position
    document.querySelectorAll(".navbar a").forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        const sectionTop = section.offsetTop;
       
        const sectionHeight = section.offsetHeight;
        
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          console.log(sectionHeight,sectionTop,position)
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  };

  const menuoperation = (value) => {
    if (value === 0) {
      menubtnRef.current.style.display = "none";
      menuclosebtnRef.current.style.display = "block";
      sidenavRef.current.style.display = "flex";
      setMenuOpen(true);
    } else {
      menuclosebtnRef.current.style.display = "none";
      sidenavRef.current.style.display = "none";
      menubtnRef.current.style.display = "flex";
      setMenuOpen(false);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.querySelectorAll(".active").forEach((link) => {
      link.classList.remove("active");
    });
    const targetLink = document.querySelector(`.navbar a[href="${id}"]`);
    if (targetLink) targetLink.classList.add("active");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', navbarlinksActive);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', navbarlinksActive);
    };
  }, []);

  return (
    <div className="navbar">
      <header>
        <ul>
          <li><p>online portfolio</p></li>
          <li><a href="#home" className='active' onClick={(e) => handleNavClick(e, "#home")}>home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>about</a></li>
          <li><a href="#education" onClick={(e) => handleNavClick(e, "#education")}>education</a></li>
          <li><a href="#project" onClick={(e) => handleNavClick(e, "#project")}>project</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>contact</a></li>
          <li>
            <span className="material-symbols-outlined" style={{ display: "none" }} ref={menuclosebtnRef} onClick={() => menuoperation(1)}>close</span>
            <span className="material-symbols-outlined" ref={menubtnRef} onClick={() => menuoperation(0)}>widgets</span>
          </li>
        </ul>
      </header>
      <menu ref={sidenavRef} style={{ display: menuOpen ? 'flex' : 'none' }}>
        <ul>
          <li><a href="#home" className='active' onClick={(e) => handleNavClick(e, "#home")}><span className="material-symbols-outlined">home_app_logo</span> home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}><span className="material-symbols-outlined">person</span> about</a></li>
          <li><a href="#education" onClick={(e) => handleNavClick(e, "#education")}><span className="material-symbols-outlined">history_edu</span> education</a></li>
          <li><a href="#project" onClick={(e) => handleNavClick(e, "#project")}><span className="material-symbols-outlined">save_as</span> project</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}><span className="material-symbols-outlined">connect_without_contact</span> contact</a></li>
        </ul>
      </menu>
    </div>
  );
}
