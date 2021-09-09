import type { NextPage } from 'next'

const CourseDetail: NextPage = () => {
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

        <div className="courseintro">
          <div className="courseintro__info">
            <h1>Cultural Diversity Introduction</h1>
            <p>Understand cultural diversity, stereotypes, prejudices and how to promote a multicultural environment</p>
            <div className="courseintro__filterinfo">
              <span>
                <img src="src/assets/images/clock.png" alt="" /> 1 Hour{' '}
              </span>
              <span>
                <img src="src/assets/images/degree.png" alt="" /> 0.1 CEU
              </span>
              <span>
                <img src="src/assets/images/comp.png" alt="" />
                LEARN AT YOUR OWN SCHEDULE ON ANY DEVICE
              </span>
              <div className="buttons">
                <button>
                  Share <img src="src/assets/images/like.svg" alt="" />
                </button>
                <button>
                  Wishlist <img src="src/assets/images/wish.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="className__info">
              <img src="src/assets/images/coloricon.png" alt="" />
              <h1>
                This className is also a part of
                <span> Knowledge Collection</span> $ 69 Basic Child Development
                <div className="link">
                  <span className="linktext">See Details</span>
                  <span className="linkicon"></span>
                </div>
              </h1>
            </div>
          </div>
          <div className="coursecard__container">
            <p>
              Look Inside
              <span>
                For Free <img src="src/assets/images/arrowicon.png" alt="" />
              </span>
            </p>
            <div className="coursecard">
              <img src="src/assets/images/cardimg1.jpg" alt="" />
              <span>$9.99</span>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="coursedetail">
          <div className="coursedetail__features">
            <h1>What you'll Learn</h1>
            <div className="coursedetail__features-feature">
              <img src="src/assets/images/check.svg" alt="" />
              <p>Understand what influences culture</p>
            </div>
            <div className="coursedetail__features-feature">
              <img src="src/assets/images/check.svg" alt="" />
              <p>Recognize how early development relates to diversity</p>
            </div>
            <div className="coursedetail__features-feature">
              <img src="src/assets/images/check.svg" alt="" />
              <p>Know the meaning of discrimination</p>
            </div>
            <div className="coursedetail__features-feature">
              <img src="src/assets/images/check.svg" alt="" />
              <p>Learn ways to promote multicultural perspective</p>
            </div>
            <div className="coursedetail__features-feature">
              <img src="src/assets/images/check.svg" alt="" />
              <p>Know ways to make you Adult care facility a culturally comfortable place</p>
            </div>
          </div>
          <div className="coursedetail__review">
            <h2>Featured Review</h2>
            <div className="review__userdetail">
              <img src="src/assets/images/girl.jpg" alt="" />
              <div className="username">
                <h2>Jane Doe</h2>
                <p>Little Angels Child Care, Renton WA</p>
              </div>
            </div>
            <div className="review__rating">
              <img src="src/assets/images/rating.png" alt="" />
              <p>a year ago</p>
            </div>
            <p>
              This is an amazing course for the beginners who want to understand about diversity. Thank you to the
              instructors (Hadelin de Ponteves and Kirill Eremenko) for explained it clearly and easy to understand. I
              hope this knowledge can help me for developing my day care.
            </p>
            <div className="review__report">
              Was this review helpful?
              <div className="like-dislike-icons">
                <img src="src/assets/images/likeicon.svg" alt="" />
                <img src="src/assets/images/dislike.svg" alt="" />
                <a href="#">Report</a>
              </div>
            </div>
          </div>
        </div>
        <div className="agreement">
          <h3>Approved or Accepted In :</h3>
          <p>
            Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Florida, Hawaii, Idaho, Illinois,
            Indiana, Iowa, Kansas, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi,
            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, North Carolina, North Dakota, Ohio, Oklahoma,
            Oregon, Pennsylvania, Puerto Rico, South Dakota, Tennessee, Texas, Utah, Vermont, Virgin Islands, Virginia,
            Washington, Wisconsin
          </p>
        </div>
        <div className="suggestionscroll">
          <p>Students Who Viewed This className Also Viewed</p>
          <div className="scroll">
            <img src="src/assets/images/previcon.svg" alt="" />
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <img src="src/assets/images/next.svg" alt="" />
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

export default CourseDetail
