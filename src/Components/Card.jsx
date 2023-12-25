import React from 'react'
import './Card.css'
const Card = (props) => {
  let difficultyColor = '';

  switch (props.difficulty) {
    case 'Easy':
      difficultyColor = 'green';
      break;
    case 'Medium':
      difficultyColor = 'yellow';
      break;
    case 'Hard':
      difficultyColor = 'red';
      break;
    default:
      difficultyColor = 'gray';
  }
  return (
    <div className="max-w-xs m-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
      <div className='num'>#{props.id + 1}</div>
      <img className='rounded' src={props.img} alt="" />
      <div className='flex flex-col justify-center items-center'>
        <a href="#">
          <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight ">{props.question}</h5>
        </a>
        <p className={`mb-3 font-normal text-gray-700 ${difficultyColor}`}>
          {props.difficulty}
        </p>
        <a
          href={props.link}
          target="_blank"
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          Let's Go
        </a>
      </div>
    </div>
  )
}

export default Card
