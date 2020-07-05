import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const Index = (props: Props) => {
  return (
    <div>
      <Layout tag="Home">
        <SEO title="Home" />
      </Layout>
    </div>
  )
}

export default Index
