import React from 'react'
import { SchoolType } from 'src/types'
import { API_URL } from 'src/config/constant'

const School: React.FC<{ school: SchoolType }> = ({ school: { excerpt, featureImage, name } }) => {
  return (
    <div className="hero__card">
      <div className="card__img-section">
        <img src={`${API_URL}${featureImage.url}`} alt="" />
      </div>
      <div className="card-text-section">
        <h1>{name}</h1>
        <p>{excerpt} </p>
      </div>
    </div>
  )
}

export default School
