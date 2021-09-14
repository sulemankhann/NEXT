import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GRAPHQL_API } from 'src/config/constant'

export default async function apolloClient(query, variables = {}) {
  try {
    const client = new ApolloClient({
      uri: GRAPHQL_API,
      cache: new InMemoryCache(),
    })
    const { data } = await client.query({
      query,
      variables,
    })
    return data
  } catch (err) {
    throw new Error('Failed to fetch API')
  }
}
