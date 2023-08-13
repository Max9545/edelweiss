import './App.css';
import { useState } from 'react'
import catalogData from './CatalogInfo'

function App() {

  const [catalog, setCatalog] = useState(catalogData.products)

  return (
    <article className="App">
      <h1>Edelweiss Catalog</h1>
    </article>
  );
}

export default App;
