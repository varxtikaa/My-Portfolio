import React, { useState } from 'react'
import './Sidebar.css'
import Logo from "../../assets/Logo.svg"

const Sidebar = () => {
  const [toggle , showMenu] = useState(false);


  return (
    <>
      <aside className={toggle?"aside show-menu":"aside"}>
        <a href="#home" className="nav__logo">
          {/* <img src={Logo} alt="" /> */}
          V<span>.</span>
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-female"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#academics" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#certificates" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#testimonials" className="nav__link">
                  <i className="icon-people"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>

            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            &copy; 2023-2024.
          </span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => {
        showMenu(!toggle)
      }}>
        <i className="icon-menu"></i>
      </div>
    </>
  )
}

export default Sidebar
