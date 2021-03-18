import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import data from './data.js' 


console.log(data)

const App = () => {
  const [books] = useState(data)
  return (
    <main>
      <h1>Programming books</h1>
      {books.map((book) => (
        <Book title={book.title} author={book.author} description={book.shortDescription}/>
      ))}
    </main>
  )
}

const Book = (props) => {
  const { title, author, description } = props
  return (
    <div className="books">
      <h2>{title}</h2>
      <div>{author}</div>
      <div>{description}</div>
    </div>
  )
}


  ReactDOM.render(<App />, document.querySelector('#root'))