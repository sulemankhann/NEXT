import React from 'react'
import Image from 'next/image'
import { XIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import BestSeller from 'src/assets/images/bestseller.png'
import CardImg from 'src/assets/images/cardimg1.jpg'
import CourseImg2 from 'src/assets/images/coursecard2.png'
import CourseImg from 'src/assets/images/coursecard3.jpg'

const ClassBox: React.FC = () => {
  return (
    <div className="childcareTraining__section-main">
      <div className="section__main-header">
        <div className="triangleIcon"></div>
        <h1>
          Cultural Diversity & Special Needs
          <span> classNamees for Washington</span>
        </h1>
        <div className="filter">
          Filter by :
          <select className="duration" name="DURATION" id="cars">
            <option value="duration">DURATION</option>
            <option value="1">New Value 1</option>
            <option value="2">New Value 2</option>
            <option value="3">New Value 3</option>
          </select>
          <select className="language" name="LANGUAGE" id="cars">
            <option value="language">LANGUAGE</option>
            <option value="1">New Value 1</option>
            <option value="2">New Value 2</option>
            <option value="3">New Value 3</option>
          </select>
          <select className="pricerange" name="PRICE RANGE" id="cars">
            <option value="price range">PRICE RANGE</option>
            <option value="1">Less than $10</option>
            <option value="2">Less than $50</option>
            <option value="3">Less than $100</option>
            <option value="3">Less than $250</option>
          </select>
        </div>
      </div>
      <div className="childcareTraining__filter-banner">
        <div className="duration">
          <span>10 Hours</span>
          <XIcon />
        </div>
        <div className="language">
          <span>English</span>
          <XIcon />
        </div>
        <div className="clearAll">Clear All</div>
      </div>
      <div className="coursecard__container">
        <div className="coursecard coursecard1">
          <div className="bestsellerTag">
            <Image src={BestSeller} alt="" />
          </div>
          <div className="coursecard__img">
            <Image src={CardImg} alt="" />
          </div>
          <h2>Cultural Diversity Introduction</h2>
          <div className="coursecard__filterCategory">
            <span className="duration">1 Hour</span>
            <span className="priceRange">$9.99</span>
          </div>
          <div className="coursecard__footer">
            <button className="coursecard__button btn">Add to cart</button>
            <HeartIcon />
          </div>
        </div>
        <div className="coursecard coursecard2">
          <div className="coursecard__header">Knowledge Collection</div>
          <div className="coursecard__content">
            <div className="coursecard__img coursecard__img2">
              <Image src={CourseImg2} alt="" />
            </div>

            <h2>Cultural Diversity Introduction</h2>
            <div className="coursecard__filterCategory">
              <span className="duration">1 Hour</span>
              <span className="priceRange">$9.99</span>
            </div>
            <div className="coursecard__footer">
              <button className="coursecard__button btn">Add to cart</button>
              <HeartIcon />
            </div>
          </div>
        </div>
        <div className="coursecard coursecard3">
          <div className="coursecard__header">Package</div>
          <div className="coursecard__content">
            <div className="coursecard__img coursecard__img3">
              <Image src={CourseImg} alt="" layout="fill" />
            </div>
            <h2>Cultural Diversity Introduction</h2>
            <div className="coursecard__filterCategory">
              <span className="duration">1 Hour</span>
              <span className="priceRange">$9.99</span>
            </div>
            <div className="coursecard__footer">
              <button className="coursecard__button btn">Add to cart</button>
              <HeartIcon />
            </div>
          </div>
        </div>
        <div className="coursecard coursecard4">
          <div className="bestsellerTag">
            <Image src={BestSeller} alt="" />
          </div>
          <div className="coursecard__img">
            <Image src={CardImg} alt="" />
          </div>

          <h2>Cultural Diversity Introduction</h2>
          <div className="coursecard__filterCategory">
            <span className="duration">1 Hour</span>
            <span className="priceRange">$9.99</span>
          </div>
          <div className="coursecard__footer">
            <button className="coursecard__button btn">Add to cart</button>
            <HeartIcon />
          </div>
        </div>
      </div>
      <button className="courses__btn btn">+ See more classNamees</button>
    </div>
  )
}

export default ClassBox
