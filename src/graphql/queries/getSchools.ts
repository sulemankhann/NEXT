import client from 'src/utils/apolloClient'
import { gql } from '@apollo/client'

const query = gql`
  query GET_SCHOOLS {
    schools {
      id
      name
      slug
      excerpt
      featureImage {
        url
        alternativeText
      }
    }
  }
`

type Schools = {
  schools: []
}

export const getSchools = async () => {
  try {
    const res: Schools = await client(query)
    return res.schools
  } catch (err) {
    console.error('Cannot get schools', err.message)
    return null
  }
}
