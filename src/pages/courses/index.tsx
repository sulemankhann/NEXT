import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'

import Header from 'src/components/Header'
import Course from 'src/components/Course'
import Footer from 'src/components/Footer'
import { getCourses } from 'src/graphql/queries'
import { CoursesPageProps } from 'src/types'

const Courses: NextPage<CoursesPageProps> = ({ courses }) => {
  return (
    <>
      <Header />
      <div className="hero">
        <div className="coursecard__container">
          {courses.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              hours={course.hours}
              fee={course.fee}
              description={course.description}
              title={course.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<CoursesPageProps> = async () => {
  try {
    const { courses } = await getCourses()
    return {
      props: {
        courses,
      },
    }
  } catch (err) {
    console.error('Cannot get serverside props,', err.message)
    return {
      notFound: true,
    }
  }
}

export default Courses
