import Head from "next/head"
import Image from "next/image"
import { gql } from "@apollo/client"

import { client } from "../lib/apollo"

export default function Home({ products }) {
  console.log(products)
  return (
    <div className="flex  text-gray-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lee</h1>
      {products.map((product) => (
        <div key={product.node.id}>
          {product.node.title}
          <Image
            src={product.node.images.edges[0].node.originalSrc}
            height={500}
            width={500}
            objectFit="contain"
          ></Image>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const result = await client.query({
    query: gql`
      query MyQuery {
        products(first: 10) {
          edges {
            node {
              id
              title
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      products: result.data.products.edges,
    },
  }
}
