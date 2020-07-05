import React from "react"

interface Props {
  alt: string
  image: string
}

const Photo = (props: Props) => {
  return (
    <div>
      <img
        className="rounded-lg"
        src={`../../Photos/${props.image}.jpg`}
        alt={props.alt}
      />
    </div>
  )
}

export default Photo
