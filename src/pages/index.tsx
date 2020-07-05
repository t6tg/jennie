import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoList from "../components/photoList"

interface Props {}

const Index = (props: Props) => {
  return (
    <Layout tag="Home">
      <SEO title="Home" />
      <PhotoList />
    </Layout>
  )
}

export default Index
