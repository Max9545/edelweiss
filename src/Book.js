import React from 'react'
import './Book.css'

function Book ({title, author, cover}) {

  return(
    <seaction>
      {cover === 'No Cover Available' ? <p>No Cover Available At This Time</p> : <img className='cover' src={`${cover}`}/>}
      <p>{`${title}`}</p>
      <p>{`${author}`}</p>
    </seaction>
  )
}

export default Book