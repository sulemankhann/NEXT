import type { NextPage } from 'next'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import PrevIcon from 'src/assets/images/icons/previcon.svg'
import NextIcon from 'src/assets/images/icons/next.svg'

const CourseAccess: NextPage = () => {
  return (
    <>
      <Header />

      <div className="hero">
        <div className="course-detail">
          <div className="course-page"></div>
          <div className="course-buttons">
            <button className="button1 btn">
              <PrevIcon /> Previous Page
            </button>
            <button className="button2 btn">
              Next Page <NextIcon />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CourseAccess
