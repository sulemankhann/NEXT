import type { NextPage } from 'next'
import Image from 'next/image'

import Header from 'src/components/Header'
import ClassBox from 'src/components/Search/ClassBox'
import Footer from 'src/components/Footer'

const Search: NextPage = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <div className="hero__adds--section">
          <h1>Ads</h1>
        </div>
        <h1>ChildCare Training</h1>
        <div className="childcareTraining">
          <div className="childcareTraining__section">
            <div className="childcareTraining__section-head">
              <div className="chilldcareTraining__selectbox">
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

            <ClassBox />
            <ClassBox />
          </div>
          <div className="childcareTraining__sidebar"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Search
