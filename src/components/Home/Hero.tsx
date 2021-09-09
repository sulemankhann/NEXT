import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import MacetLogo from 'src/assets/images/macet.jpg'
import CdaLogo from 'src/assets/images/cda.png'
import HeroImg from 'src/assets/images/herotextimg.jpg'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <div className="hero__info-section">
      <div className="hero__info-text">
        <h1>
          We offer <span> hundreds of high-quality</span> training classes on a wide range of popular topics, all
          accessible on any device, including tablets and phones.
        </h1>
        <div className="hero__info-input input__container">
          <SearchIcon />
          <input type="text" placeholder="What do you want to learn?" />
          <button type="submit">Search</button>
        </div>
        <div className="hero__info-icons-container">
          <button className="btn">try our free class</button>
          <div className="icons">
            <Image className="img1" src={MacetLogo} alt="macet logo" />
            <Image className="img1" src={CdaLogo} alt="cda logo" />
          </div>
        </div>
      </div>
      <div className="hero__info-img-section">
        <div className="img-wrapper">
          <Image className="img" src={HeroImg} alt="cda logo" />
        </div>
      </div>
    </div>
  )
}

export default Hero
