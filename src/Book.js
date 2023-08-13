import React from 'react'
import './Book.css'

function Book ({title, author, cover, category}) {

  return(
    <seaction>
      {cover === 'No Cover Available' ? <p>No Cover Available At This Time</p> : <img className='cover' src={`${cover}`}/>}
      <h4 className='title'>{title ? `${title}` : `Unknown Title`}</h4>
      <p className='author'>{author ? `${author}`: `Unknown Author`}</p>
  <p className='catagory'>{category ? `${category}` : `Unknown Category`}</p>
    </seaction>
  )
}

export default Book