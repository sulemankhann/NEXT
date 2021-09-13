import { ApolloClient, InMemoryCache } from '@apollo/client'

export default async function apolloClient(query, variables = {}) {
  try {
    const client = new ApolloClient({
      uri: 'http://localhost:1337/graphql',
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
