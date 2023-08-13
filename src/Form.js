import './Form.css'
import { useState } from 'react'

function Form ({searchCatalog, setCatalog, catalog}) {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className='search-bar'>
      <form onSubmit={(e) => searchCatalog(searchTerm, e)}>
        <label className='search-label'>Search By Title or Author:
          <input
            type='text'
            placeholder='Search Term'
            name='search'
            className='search-input'
            onChange={e => setSearchTerm(e.target.value)}
          />
        </label>
        <button className='search-submit'>SUBMIT</button>
      </form>
      <button className='clear-search' onClick={() => setCatalog(catalog)}>Clear Search</button>
    </section>
  )
}

export default Form