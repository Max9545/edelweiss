import './App.css';
import { useState } from 'react'
import catalogData from './CatalogInfo'
import Book from './Book'

function App() {

  const [catalog, setCatalog] = useState(catalogData.products)

  const books = catalog.map((book, index) => {
    
    return <Book
            title={book.name}
            author={book.author}
            key={index}
    />
  })

  return (
    <article className="App">
      <h1>Edelweiss Catalog</h1>
      <div>
        {books && books}
      </div>
    </article>
  );
}

export default App;
