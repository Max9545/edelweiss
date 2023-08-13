import React from 'react'
import './Book.css'

function Book ({title, author}) {

  return(
    <seaction>
      <p>{`${title}`}</p>
      <p>{`${author}`}</p>
    </seaction>
  )
}

export default Book