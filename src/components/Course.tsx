import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { CourseType } from 'src/types'
import CardImg from 'src/assets/images/cardimg1.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Course: React.FC<CourseType> = ({ id, hours, fee, description, title }) => {
  const router = useRouter()
  return (
    <div className="coursecard coursecard1">
      <div className="coursecard__img">
        <Image src={CardImg} alt="" />
      </div>
      <h2 onClick={() => router.push(`/courses/${id}`)}>{title}</h2>
      <div className="coursecard__filterCategory">
        <span className="duration">{hours} Hour</span>
        <span className="priceRange">${fee}</span>
      </div>
      <div className="coursecard__footer">
        <button className="coursecard__button btn">Add to cart</button>
        <HeartIcon />
      </div>
    </div>
  )
}

export default Course
