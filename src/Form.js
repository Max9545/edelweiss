import './Form.css'
import { useState } from 'react'

function Form () {

  const [searchTerm, setSearchTerm] = useState('')
console.log(searchTerm)
  return (
    <section>
      <form>
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
    </section>
  )
}

export default Form