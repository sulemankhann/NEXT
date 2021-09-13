import React from 'react'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/outline'

const Objectives: React.FC<{ objectives: string }> = ({ objectives }) => {
  return (
    <div className="coursedetail__features">
      {/* <h1>What you'll Learn</h1>
      <div className="coursedetail__features-feature">
        <CheckIcon />
        <p>Understand what influences culture</p>
      </div>
      <div className="coursedetail__features-feature">
        <CheckIcon />
        <p>Recognize how early development relates to diversity</p>
      </div>
      <div className="coursedetail__features-feature">
        <CheckIcon />
        <p>Know the meaning of discrimination</p>
      </div>
      <div className="coursedetail__features-feature">
        <CheckIcon />
        <p>Learn ways to promote multicultural perspective</p>
      </div>
      <div className="coursedetail__features-feature">
        <CheckIcon />
        <p>Know ways to make you Adult care facility a culturally comfortable place</p>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: objectives }}></div>
    </div>
  )
}

export default Objectives
