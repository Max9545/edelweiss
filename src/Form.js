import './Form.css'
import { useState } from 'react'

function Form ({searchCatalog, setCatalog, catalog}) {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section>
      <form onSubmit={(e) => searchCatalog(searchTerm, e)}>
        <label>Search
          <input
            type='text'
            placeholder='Search Term'
            name='search'
            onChange={e => setSearchTerm(e.target.value)}
          />
        </label>
        <button>SUBMIT</button>
      </form>
      <button onClick={() => setCatalog(catalog)}>Clear Search</button>
    </section>
  )
}

export default Form