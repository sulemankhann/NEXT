import React from 'react'
import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'

import Header from 'src/components/Header'
import School from 'src/components/Home/School'
import Hero from 'src/components/Home/Hero'
import Footer from 'src/components/Footer'
import { getSchools } from 'src/graphql/queries'
import { HomePageProps } from 'src/types'

const Home: NextPage<HomePageProps> = ({ schools }) => {
  return (
    <>
      <Header />
      <div className="hero">
        <Hero />
        <div className="hero__cards-container">
          {schools.map((school) => (
            <School key={school.id} school={school} />
          ))}
        </div>
        <div className="hero__text-section">
          <div className="hero__textmain">
            <div className="hero__textmain-text">
              <h1>Lorem ipsum dolor</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet. Quisque vel efficitur quam, eu molestie odio. In hac habitasse platea dictumst.
                Integer diam sapien.
              </p>
            </div>
            <div className="hero__textmain-img"></div>
          </div>
          <div className="hero__textsub">
            <div className="hero__textsub-text1">
              <h2>LOREM IPSUM DOLOR</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet.
              </p>
            </div>
            <div className="hero__textsub-text1">
              <h2>LOREM IPSUM DOLOR</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet.
              </p>
            </div>
            <div className="hero__textsub-text1">
              <h2>LOREM IPSUM DOLOR</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet.
              </p>
            </div>
          </div>
          <div className="hero__textcards">
            <div className="hero__textcard">
              <img src="src/assets/images/userimg.svg" alt="" />
              <h2>name last name</h2>
              <p className="firsttext">Lorem ipsum dolor sit</p>
              <p className="secondtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet.
              </p>
            </div>
            <div className="hero__textcard">
              <img src="src/assets/images/userimg.svg" alt="" />
              <h2>name last name</h2>
              <p className="firsttext">Lorem ipsum dolor sit</p>
              <p className="secondtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet.
              </p>
            </div>
            <div className="hero__textcard">
              <img src="src/assets/images/userimg.svg" alt="" />
              <h2>name last name</h2>
              <p className="firsttext">Lorem ipsum dolor sit</p>
              <p className="secondtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras
                euismod ornare laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const schools = await getSchools()
    return {
      props: {
        schools,
      },
    }
  } catch (err) {
    console.error('Cannot get serverside props,', err.message)
    return {
      notFound: true,
    }
  }
}

export default Home
