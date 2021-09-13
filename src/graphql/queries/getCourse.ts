import client from 'src/utils/apolloClient'
import { gql } from '@apollo/client'

const query = gql`
  query GET_COURSES($id: ID!) {
    course(id: $id) {
      id
      title
      slug
      objectives
      description
      fee
      hours
      states {
        name
      }
      structure {
        ... on ComponentCourseBlock {
          id
          __typename
          body
          body2
        }
        ... on ComponentCourseInteracts {
          id
          __typename
          title
          type
          question
          answer
        }
      }
    }
  }
`

export const getCourse = async (id) => {
  try {
    const res = await client(query, { id })
    return res
  } catch (err) {
    console.error('Cannot get courses', err.message)
    return null
  }
}
