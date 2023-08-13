import './App.css';
import { useState } from 'react'
import catalogData from './CatalogInfo'
import Book from './Book'
import Form from './Form';

function App() {

  const [catalog, setCatalog] = useState(catalogData.products)

  const books = catalog.map((book, index) => {
    
    const bookCover = book.images ? book.images[0].uri : 'No Cover Available'

    return <Book
            title={book.name}
            author={book.author}
            cover={bookCover}
            category={book.category}
            key={index}
    />
  })

  const searchCatalog = (searchTerm, event) => {

    // setCatalog(catalogData.products)

    event.preventDefault()

    const list = []

    catalog.map((book) => {

      if (book.fullName === undefined || book.author === undefined) {
        return list
      } 

      if (book.fullName.includes(searchTerm) || book.author.includes(searchTerm)) {
        list.push(book)
      }
    })

    setCatalog(list)
  }

  return (
    <article className="App">
      <h1 className='company-header'>Edelweiss Catalog</h1>
      <div className='search-and-display'>
        <Form 
          searchCatalog={searchCatalog} 
          setCatalog={setCatalog} 
          catalog={catalogData.products}
        />
        <div className='book-display'>
          {catalog.length == 0 && <h3 className='no-books-error'>Nothing Matches Your Search</h3>}
          {books && books}
        </div>
      </div>
    </article>
  );
}

export default App;
