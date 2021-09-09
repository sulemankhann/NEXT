import type { NextPage } from 'next'

const Search: NextPage = () => {
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
        <div className="hero__adds--section"></div>
        <h1>ChildCare Training</h1>
        <div className="childcareTraining">
          <div className="childcareTraining__section">
            <div className="childcareTraining__section-head">
              <div className="chilldcareTraining__selectbox input__container">
                <select name="Washington" id="cars">
                  <option value="washington">Washington</option>
                  <option value="texas">Texas</option>
                  <option value="michigan">Michigan</option>
                </select>
              </div>
              <div className="input__container">
                <input className="childcare__input" type="text" placeholder="Search For classNamees in Washington" />
              </div>
            </div>
            <div className="childcareTraining__section-main">
              <div className="section__main-header">
                <div className="triangleIcon"></div>
                <h1>
                  Cultural Diversity & Special Needs
                  <span> classNamees for Washington</span>
                </h1>
                <div className="filter input__container">
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
                  10 Hours <img src="src/assets/images/close.svg" alt="" />
                </div>
                <div className="language">
                  English <img src="src/assets/images/close.svg" alt="" />
                </div>
                <div className="clearAll">Clear All</div>
              </div>
              <div className="coursecard__container">
                <div className="coursecard coursecard1">
                  <img className="bestsellerTag" src="src/assets/images/bestseller.png" alt="" />
                  <img className="coursecard__img" src="src/assets/images/cardimg1.jpg" alt="" />
                  <h2>Cultural Diversity Introduction</h2>
                  <div className="coursecard__filterCategory">
                    <span className="duration">1 Hour</span>
                    <span className="priceRange">$9.99</span>
                  </div>
                  <div className="coursecard__footer">
                    <button className="coursecard__button btn">Add to cart</button>
                    <span>
                      <img src="src/assets/images/favourite.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="coursecard coursecard2">
                  <div className="coursecard__header">Knowledge Collection</div>
                  <div className="coursecard__content">
                    <img className="coursecard__img" src="src/assets/images/coursecard2.png" alt="" />
                    <h2>Cultural Diversity Introduction</h2>
                    <div className="coursecard__filterCategory">
                      <span className="duration">1 Hour</span>
                      <span className="priceRange">$9.99</span>
                    </div>
                    <div className="coursecard__footer">
                      <button className="coursecard__button btn">Add to cart</button>
                      <span>
                        <img src="src/assets/images/favourite.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="coursecard coursecard3">
                  <div className="coursecard__header">Package</div>
                  <div className="coursecard__content">
                    <img className="coursecard__img coursecard__img3" src="src/assets/images/coursecard3.jpg" alt="" />
                    <h2>Cultural Diversity Introduction</h2>
                    <div className="coursecard__filterCategory">
                      <span className="duration">1 Hour</span>
                      <span className="priceRange">$9.99</span>
                    </div>
                    <div className="coursecard__footer">
                      <button className="coursecard__button btn">Add to cart</button>
                      <span>
                        <img src="src/assets/images/favourite.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="coursecard coursecard4">
                  <img className="bestsellerTag" src="src/assets/images/bestseller.png" alt="" />
                  <img className="coursecard__img" src="src/assets/images/cardimg1.jpg" alt="" />
                  <h2>Cultural Diversity Introduction</h2>
                  <div className="coursecard__filterCategory">
                    <span className="duration">1 Hour</span>
                    <span className="priceRange">$9.99</span>
                  </div>
                  <div className="coursecard__footer">
                    <button className="coursecard__button btn">Add to cart</button>
                    <span>
                      <img src="src/assets/images/favourite.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <button className="courses__btn btn">+ See more classNamees</button>
            </div>
            <div className="childcareTraining__section-main">
              <div className="section__main-header">
                <div className="triangleIcon"></div>
                <h1>
                  Cultural Diversity & Special Needs
                  <span> classNamees for Washington</span>
                </h1>
                <div className="filter input__container">
                  Filter by :
                  <select name="DURATION" id="cars">
                    <option value="duration">DURATION</option>
                    <option value="1">New Value 1</option>
                    <option value="2">New Value 2</option>
                    <option value="3">New Value 3</option>
                  </select>
                  <select name="LANGUAGE" id="cars">
                    <option value="language">LANGUAGE</option>
                    <option value="1">New Value 1</option>
                    <option value="2">New Value 2</option>
                    <option value="3">New Value 3</option>
                  </select>
                  <select name="PRICE RANGE" id="cars">
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
                  10 Hours <img src="src/assets/images/close.svg" alt="" />
                </div>
                <div className="language">
                  English <img src="src/assets/images/close.svg" alt="" />
                </div>
                <div className="clearAll">CLear All</div>
              </div>
              <div className="coursecard__container">
                <div className="coursecard coursecard1">
                  <img className="bestsellerTag" src="src/assets/images/bestseller.png" alt="" />
                  <img className="coursecard__img" src="src/assets/images/cardimg1.jpg" alt="" />
                  <h2>Cultural Diversity Introduction</h2>
                  <div className="coursecard__filterCategory">
                    <span className="duration">1 Hour</span>
                    <span className="priceRange">$9.99</span>
                  </div>
                  <div className="coursecard__footer">
                    <button className="coursecard__button btn">Add to cart</button>
                    <span>
                      <img src="src/assets/images/favourite.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="coursecard coursecard2">
                  <div className="coursecard__header">Knowledge Collection</div>
                  <div className="coursecard__content">
                    <img className="coursecard__img" src="src/assets/images/coursecard2.png" alt="" />
                    <h2>Cultural Diversity Introduction</h2>
                    <div className="coursecard__filterCategory">
                      <span className="duration">1 Hour</span>
                      <span className="priceRange">$9.99</span>
                    </div>
                    <div className="coursecard__footer">
                      <button className="coursecard__button btn">Add to cart</button>
                      <span>
                        <img src="src/assets/images/favourite.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="coursecard coursecard3">
                  <div className="coursecard__header">Package</div>
                  <div className="coursecard__content">
                    <img className="coursecard__img coursecard__img3" src="src/assets/images/coursecard3.jpg" alt="" />
                    <h2>Cultural Diversity Introduction</h2>
                    <div className="coursecard__filterCategory">
                      <span className="duration">1 Hour</span>
                      <span className="priceRange">$9.99</span>
                    </div>
                    <div className="coursecard__footer">
                      <button className="coursecard__button btn">Add to cart</button>
                      <span>
                        <img src="src/assets/images/favourite.svg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="coursecard coursecard4">
                  <img className="bestsellerTag" src="src/assets/images/bestseller.png" alt="" />
                  <img className="coursecard__img" src="src/assets/images/cardimg1.jpg" alt="" />
                  <h2>Behavior Management & Interactions</h2>
                  <div className="coursecard__filterCategory">
                    <span className="duration">1 Hour</span>
                    <span className="priceRange">$9.99</span>
                  </div>
                  <div className="coursecard__footer">
                    <button className="coursecard__button btn">Add to cart</button>
                    <span>
                      <img src="src/assets/images/favourite.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <button className="courses__btn btn">+ See more classNamees</button>
            </div>
          </div>
          <div className="childcareTraining__sidebar"></div>
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

export default Search
