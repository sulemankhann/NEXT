import type { NextPage } from 'next'

const CourseAccess: NextPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="src/assets/images/logo.jpg" alt="logo" />
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
      </nav>

      <header className="hero">
        <div className="hero__input--container">
          <div className="hero__input input__container">
            <input type="text" placeholder="Search Anything Here" />
            <button type="submit">
              <img src="src/assets/images/searchicon.svg" alt="" />
            </button>
          </div>
          <div className="hero__list">
            <ul>
              <li>
                <img src="src/assets/images/dashboard.svg" alt="" />
                <a href="#">My dashboard</a>
              </li>
              <li>
                <img src="src/assets/images/user.svg" alt="user icon" />
                <a href="#">Hello John</a>
              </li>
              <li>
                <img src="src/assets/images/logoutIcon.svg" alt="user icon" />
                <a href="#">log out</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-page"></div>
          <div className="course-buttons">
            <button className="button1 btn">
              <img src="src/assets/images/previcon1.svg" alt="" /> Previous Page
            </button>
            <button className="button2 btn">
              Next Page <img src="src/assets/images/nxticon.svg" alt="" />
            </button>
          </div>
        </div>
      </header>

      <footer className="footer">
        <div className="footer__services">
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident libero? Culpa, iste. Sint, tenetur
            sapiente adipisci quam aliquid voluptatem?
          </p>
          <div className="footer__icons">
            <img className="facebook__icon" src="src/assets/images/fbicons.svg" alt="" />
            <img className="facebook__icon" src="src/assets/images/twittericon.svg" alt="" />
            <img className="facebook__icon" src="src/assets/images/dribbleicon.svg" alt="" />
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__partners">
          <ul className="categories">
            <li className="list-head">
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Testimonals</a>
            </li>
            <li>
              <a href="">Price Table</a>
            </li>
            <li>
              <a href="">Crew</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
          <ul className="partners">
            <li className="list-head">
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div className="footer__line"></div>
        <div className="footer__button">
          <button className="footer__btn btn">Button</button>
        </div>
      </footer>
    </>
  )
}

export default CourseAccess
