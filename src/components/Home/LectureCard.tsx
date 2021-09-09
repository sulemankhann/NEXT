import React from 'react'
import CardImg3 from 'src/assets/images/card3.jpg'
import Image from 'next/image'

const LectureCard: React.FC = () => {
  return (
    <div className="hero__card">
      <div className="card__img-section">
        <Image src={CardImg3} alt="" />
      </div>
      <div className="card-text-section">
        <h1>Childcare Training</h1>
        <p>From Licensing to career growth to professional developmen,we've got all the training classes you nedd.</p>
      </div>
    </div>
  )
}

export default LectureCard
