import React from 'react'
import Image from 'next/image'

import Rating from 'src/assets/images/rating.png'
import Girl from 'src/assets/images/girl.jpg'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { ThumbDownIcon } from '@heroicons/react/outline'

const FeaturedReview: React.FC = () => {
  return (
    <div className="coursedetail__review">
      <h2>Featured Review</h2>
      <div className="review__userdetail">
        <Image src={Girl} alt="girl image" />

        <div className="username">
          <h2>Jane Doe</h2>
          <p>Little Angels Child Care, Renton WA</p>
        </div>
      </div>
      <div className="review__rating">
        <Image src={Rating} alt="rating image" />
        <p>a year ago</p>
      </div>
      <p>
        This is an amazing course for the beginners who want to understand about diversity. Thank you to the instructors
        (Hadelin de Ponteves and Kirill Eremenko) for explained it clearly and easy to understand. I hope this knowledge
        can help me for developing my day care.
      </p>
      <div className="review__report">
        Was this review helpful?
        <div className="like-dislike-icons">
          <ThumbUpIcon />
          <ThumbDownIcon />
          <a href="#">Report</a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedReview
