import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import DashboardSvg from 'src/assets/images/icons/dashboard.svg'
import LogoutSvg from 'src/assets/images/icons/logoutIcon.svg'
import Logo from 'src/assets/images/logo.jpg'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <a href="#">ChildCare Training</a>
            </li>
            <div className="navbar__links-line"></div>
            <li>
              <a href="#">Cda Training</a>
            </li>
            <div className="navbar__links-line"></div>
            <li>
              <a href="#">healthcare Training</a>
            </li>
            <div className="navbar__links-line"></div>
            <li>
              <a href="#">About US</a>
            </li>
            <div className="navbar__links-line"></div>
            <li>
              <a href="#">Blog</a>
            </li>
            <div className="navbar__links-line"></div>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="navbar__languages">
          <a className="navbar__languages-link" href="#">
            Spanish
          </a>
        </div>
      </div>

      <div className="hero">
        <div className="hero__input--container">
          <div className="hero__input input__container">
            <input type="text" placeholder="Search Anything Here" />
            <button type="submit">
              <SearchIcon />
            </button>
          </div>
          <div className="hero__list">
            <ul>
              <li>
                <DashboardSvg fill="#fd972c" />
                <a href="#">My dashboard</a>
              </li>
              <li>
                <div>
                  <UserIcon fill="#fd972c" />
                </div>
                <a href="#">Hello John</a>
              </li>
              <li>
                <LogoutSvg fill="#fd972c" />
                <a href="#">log out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
