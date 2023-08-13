import React from 'react'
import './Book.css'

function Book ({title, author, cover}) {

  return(
    <seaction>
      {cover}
      <p>{`${title}`}</p>
      <p>{`${author}`}</p>
    </seaction>
  )
}

export default Book