import React from 'react'
import leetcode from '../assets/question'
import Card from './Card'
const Hitman = () => {
  return (
    <div>
      <div className='flex flex-wrap'>
        {
          leetcode.map((item, index) => {
            return (
              <div className='mx-auto'>
                <Card
                  id={index}
                  question={item.question}
                  img={item.Image}
                  link={item.link}
                  difficulty={item.difficulty}
                  topic={item.topic}
                />
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Hitman
