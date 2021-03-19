import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import data from './data.js' 
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

const Book = (props) => {
  const {image, title, author, description, url, publisher, publicationDate, detailedDescription} = props
  const [isLess, setisMore] = useState(false)
  // giving the component a state that can be true or false , using to show or hide html 
  const onClick = () => setisMore(!isLess)
  // toggle the state 
  return (
    <div className="books">
      <img src={image}></img>
      <div>
        <h2>{title}</h2> 
        <h3>{author}</h3> 
        <p>{description}</p>
        <div style={isLess ? {} : { display: 'none' }}>
          {/* style attribute is inline css ; ternary ; {true}:{false} so if false display none, if true display everything in this div*/}
        <div>URL: {url}</div> 
        <div>Publisher: {publisher} </div>
        <div>Publication Date: {publicationDate}</div>
        <p>Full Description: {detailedDescription}</p>
        </div> 
      </div>
      <button onClick={onClick}>{isLess ? "Read Less" : "Read More"}</button>
    </div>
  )
}




  ReactDOM.render(<App />, document.querySelector('#root'))