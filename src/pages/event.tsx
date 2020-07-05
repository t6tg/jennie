import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const Event = (props: Props) => {
  return (
    <Layout tag="Event">
      <SEO title="Event" />
    </Layout>
  )
}

export default Event
