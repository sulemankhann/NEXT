import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Objectives from 'src/components/CourseDetail/Objectives'
import FeaturedReview from 'src/components/CourseDetail/FeaturedReview'
import Clock from 'src/assets/images/clock.png'
import Degree from 'src/assets/images/degree.png'
import Comp from 'src/assets/images/comp.png'
import ColorIcon from 'src/assets/images/coloricon.png'
import ArrowIcon from 'src/assets/images/arrowicon.png'
import CartImg from 'src/assets/images/cardimg1.jpg'
import PrevIcon from 'src/assets/images/icons/previcon.svg'
import NextIcon from 'src/assets/images/icons/next.svg'
import { HeartIcon } from '@heroicons/react/solid'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { getCourse } from 'src/graphql/queries'
import { Course } from 'src/types'
import { useRouter } from 'next/router'

const CourseDetail: NextPage<{ course: Course }> = ({
  course: { title, hours, fee, description, objectives, states },
}) => {
  const router = useRouter()

  return (
    <>
      <Header />

      <div className="hero">
        <div className="courseintro">
          <div className="courseintro__info">
            <h1 onClick={() => router.push(`${router.asPath}/learn`)}>{title}</h1>

            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            {/* {description} */}
            {/* <p>Understand cultural diversity, stereotypes, prejudices and how to promote a multicultural environment</p> */}
            <div className="courseintro__filterinfo">
              <span>
                <Image src={Clock} alt="clock" /> {hours} Hour{' '}
              </span>
              <span>
                <Image src={Degree} alt="degree" />
                0.1 CEU
              </span>
              <span>
                <Image src={Comp} alt="comp" />
                LEARN AT YOUR OWN SCHEDULE ON ANY DEVICE
              </span>
              <div className="buttons">
                <button>
                  Share
                  <ThumbUpIcon />
                </button>
                <button>
                  Wishlist
                  <HeartIcon />
                </button>
              </div>
            </div>
            <div className="class__info">
              <div>
                <Image src={ColorIcon} alt="color icon" />
              </div>
              <h1>
                This class is also a part of
                <span> Knowledge Collection</span> $ 69 Basic Child Development
                <div className="link">
                  <span className="linktext">See Details</span>
                  <span className="linkicon"></span>
                </div>
              </h1>
            </div>
          </div>
          <div className="coursecard__container">
            <div className="coursecard__container--price">
              <span>Look Inside</span>
              <span className="free">For Free</span>
              <span>
                <Image src={ArrowIcon} alt="arrow icon" height="100px" width="100px" />
              </span>
            </div>
            <div className="coursecard">
              <div>
                <Image src={CartImg} alt="lecture image" layout="fill" />
              </div>
              <span>${fee}</span>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="coursedetail">
          <Objectives objectives={objectives} />
          <FeaturedReview />
        </div>
        <div className="agreement">
          <h3>Approved or Accepted In :</h3>
          <p>{states.map((state) => state.name).join(', ')}</p>
        </div>

        <div className="suggestionscroll">
          <p>Students Who Viewed This class Also Viewed</p>
          <div className="scroll">
            <PrevIcon />
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <div className="course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et?</div>
            <NextIcon />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { params } = context
    const { course } = await getCourse(params.id)

    return {
      props: {
        course,
      },
    }
  } catch (err) {
    console.error('Cannot get serverside props,', err.message)
    return {
      notFound: true,
    }
  }
}

export default CourseDetail
