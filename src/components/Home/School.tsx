import React from 'react'
import { SchoolType } from 'src/types'

const School: React.FC<{ school: SchoolType }> = ({ school: { excerpt, featureImage, name } }) => {
  return (
    <div className="hero__card">
      <div className="card__img-section">
        <img src={`http://localhost:1337${featureImage.url}`} alt="" />
      </div>
      <div className="card-text-section">
        <h1>{name}</h1>
        <p>{excerpt} </p>
      </div>
    </div>
  )
}

export default School
