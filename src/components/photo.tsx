import React from "react"
import Img from "gatsby-image"

interface Props {
  alt: string
  image: string
}

const Photo = (props: Props) => {
  return <Img className="rounded-lg" fluid={props.image} alt={props.alt} />
}

export default Photo
