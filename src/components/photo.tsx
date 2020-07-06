import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  alt: string
  image: FluidObject
}

const Photo = (props: Props) => {
  return (
    <>
      <Img fluid={props.image} alt={props.alt} />
    </>
  )
}

export default Photo
