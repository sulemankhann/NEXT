import client from 'src/utils/apolloClient'
import { gql } from '@apollo/client'

const query = gql`
  query GET_COURSES {
    courses(limit: 12, where: { active_ne: "inactive" }) {
      id
      title
      description
      fee
      hours
    }
  }
`

export const getCourses = async () => {
  try {
    const res = await client(query)
    return res
  } catch (err) {
    console.error('Cannot get courses', err.message)
    return null
  }
}
