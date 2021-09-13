import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import React, { useState, useEffect } from 'react'

import { getCourse } from 'src/graphql/queries'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import PrevIcon from 'src/assets/images/icons/previcon.svg'
import NextIcon from 'src/assets/images/icons/next.svg'
import { useRouter } from 'next/router'

import { CourseStructure } from 'src/types'

const Learn: NextPage<{ course: { structure: CourseStructure } }> = ({ course: { structure } }) => {
  const router = useRouter()
  const [currPage, setCurrPage] = useState(1)

  console.log(structure)

  return (
    <>
      <Header />

      <div className="hero">
        <div className="course-detail">
          <div className="course-page">
            {structure[currPage - 1].body && (
              <div dangerouslySetInnerHTML={{ __html: structure[currPage - 1].body }}></div>
            )}
            {structure[currPage - 1].body2 && (
              <div dangerouslySetInnerHTML={{ __html: structure[currPage - 1].body2 }}></div>
            )}
            {structure[currPage - 1].title && (
              <div dangerouslySetInnerHTML={{ __html: structure[currPage - 1].title }}></div>
            )}
            {structure[currPage - 1].question && (
              <div dangerouslySetInnerHTML={{ __html: structure[currPage - 1].question }}></div>
            )}
            {structure[currPage - 1].answer && (
              <div dangerouslySetInnerHTML={{ __html: structure[currPage - 1].answer }}></div>
            )}
          </div>
          <div className="course-buttons">
            {currPage > 1 && (
              <button
                className="button1 btn"
                onClick={() => {
                  if (currPage > 1) setCurrPage((prevValue) => prevValue - 1)
                }}
              >
                <PrevIcon /> Previous Page
              </button>
            )}
            {currPage < structure.length && (
              <button
                className="button2 btn"
                onClick={() => {
                  if (currPage < structure.length) setCurrPage((prevValue) => prevValue + 1)
                }}
              >
                Next Page <NextIcon />
              </button>
            )}
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

export default Learn
