import React from "react"
import photos from "../../static/photos.json"
import Photo from "./photo"

interface Props {}

const PhotoList = (props: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {photos.map((r, i) => (
        <Photo key={i} image={r.img} alt={r.name} />
      ))}
    </div>
  )
}

export default PhotoList
