import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import PrevIcon from 'src/assets/images/icons/previcon.svg'
import NextIcon from 'src/assets/images/icons/next.svg'
import { getCourse } from 'src/graphql/queries'

const CoursePage = ({ page, quiz, id, currentPage, totalPages, isQuizPage }) => {
  const router = useRouter()
  console.log({ currentPage, totalPages, isQuizPage })

  const nextPage = () => {
    router.push(`/dashboard/learn/${id}/${currentPage + 1}`)
  }

  const previousPage = () => {
    router.push(`/dashboard/learn/${id}/${currentPage - 1}`)
  }

  return (
    <>
      <Header />
      <div className="hero">
        <div className="course-detail">
          <div className="course-page">
            {!isQuizPage &&
              page.map((block, index) => {
                if (block.__typename === 'ComponentCourseBlock') {
                  return (
                    <>
                      {block.body && <div dangerouslySetInnerHTML={{ __html: block.body }}></div>}
                      {block.body2 && <div dangerouslySetInnerHTML={{ __html: block.body2 }}></div>}
                    </>
                  )
                } else {
                  return (
                    <>
                      <h1 style={{ textAlign: 'center' }}>INTERACT: {block.title}</h1>
                      <div style={{ marginTop: 40 }} dangerouslySetInnerHTML={{ __html: block.question }}></div>
                      <textarea style={{ width: '70%', height: '200px' }}></textarea>
                      <br />
                      <button className="btn" style={{ backgroundColor: '#04badd', color: 'white', marginTop: '40px' }}>
                        Save
                      </button>
                    </>
                  )
                }
              })}
            {isQuizPage && (
              <>
                <h1 style={{ textAlign: 'center', fontSize: 30, marginBottom: 60 }}>Quiz</h1>
                {quiz.map((quizEl) => {
                  return (
                    <div className="quiz" key={quizEl.id}>
                      <div className="quiz_question">{quizEl.question}</div>
                      <div className="quiz_awnser">
                        {quizEl.options.map((option) => (
                          <div className="quiz_option">
                            <input type="radio" name={`quiz[${quizEl.id}]`} />
                            <label>{option.response_text}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
                <button className="btn" style={{ backgroundColor: '#04badd', color: 'white', marginTop: '40px' }}>
                  Submit Quiz
                </button>
              </>
            )}
          </div>
          <div className="course-buttons">
            {currentPage !== 1 && (
              <button className="button1 btn" onClick={previousPage}>
                <PrevIcon /> Previous Page
              </button>
            )}
            {!isQuizPage && (
              <button className="button2 btn" onClick={nextPage}>
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

export default CoursePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { params } = context
    const { course } = await getCourse(params.id)
    const page = course.structure.filter((structure) => structure.page == params.page)
    const quiz = course.quiz
    const currentPage = +params.page
    const totalPages = course.structure[course.structure.length - 1].page
    const isQuizPage = currentPage === totalPages + 1 && course.quiz.length > 0

    return {
      props: {
        id: params.id,
        currentPage,
        totalPages,
        page,
        quiz,
        isQuizPage,
      },
    }
  } catch (err) {
    console.error('Cannot get serverside props,', err.message)
    return {
      notFound: true,
    }
  }
}
