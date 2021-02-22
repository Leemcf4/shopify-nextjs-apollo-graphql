import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  link: new createHttpLink({
    uri: "https://underwaterbutterfly.myshopify.com/api/2021-01/graphql.json",
    headers: {
      "X-Shopify-Storefront-Access-Token": "bbec75bdcfea7af51d1a0abf0ea80ec9",
      Accept: "application/graphql",
    },
  }),
  cache: new InMemoryCache(),
})
