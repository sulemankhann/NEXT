import React from 'react'
import FacebookSvg from 'src/assets/images/icons/fbicons.svg'
import TwitterSvg from 'src/assets/images/icons/twittericon.svg'
import DribbleSvg from 'src/assets/images/icons/dribbleicon.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__services">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident libero? Culpa, iste. Sint, tenetur
          sapiente adipisci quam aliquid voluptatem?
        </p>
        <div className="footer__icons">
          <FacebookSvg className="facebook__icon" alt="facebook icon" />
          <TwitterSvg className="facebook__icon" alt="twitter icon" />
          <DribbleSvg className="facebook__icon" alt="dribble icon" />
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
  )
}

export default Footer
