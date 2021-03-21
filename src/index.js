import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import data from './data.js' 
import Book from './book.js'
import './app.css';


const App = () => {
  const [books, setBook] = useState(data)
  // this is the state for the whole app, books = book data that was provided 
  return (
    <main>
      <h1>Free Shelf Thing</h1>
      {books.map((book) => (
        <div>
        <Book image={book.coverImageUrl} title={book.title} author={book.author} description={book.shortDescription} url={book.url} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription}/>
        </div>
        // for book in books, passing in the individual book data 
      ))}
    </main>
  )
}






  ReactDOM.render(<App />, document.querySelector('#root'))