import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const Meme = (props: Props) => {
  return (
    <Layout tag="Meme">
      <SEO title="Meme" />
    </Layout>
  )
}

export default Meme
