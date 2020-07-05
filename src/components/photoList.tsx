import React from "react"
import photos from "../../static/photos.json"
import Photo from "./photo"
import { useStaticQuery, graphql } from "gatsby"

interface Props {}

const PhotoList = (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.allFile.edges.map((r, i) => (
        <Photo key={i} image={r.node.childImageSharp.fluid} alt={i} />
      ))}
    </div>
  )
}

export default PhotoList
