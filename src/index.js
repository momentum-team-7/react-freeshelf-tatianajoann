import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import data from './data.js' 
import './app.css';


const App = () => {
  const [books, setBook] = useState(data)
  const [isLess, setisMore] = useState(false)
  const onClick = () => setisMore(!isLess)
  console.log(isLess)
  return (
    <main>
      <h1>Free Shelf Thing</h1>
      {books.map((book) => (
        <div>
        <Book isLess={isLess} image={book.coverImageUrl} title={book.title} author={book.author} description={book.shortDescription} url={book.url} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription}/>
        <button onClick={onClick}>abc</button>
        </div>
      ))}
    </main>
  )
}

const Book = (props) => {
  const { isLess, image, title, author, description, url, publisher, publicationDate, detailedDescription} = props
  return (
    <div className="books">
      <img src={image}></img>
      <div>
        <h2>{title}</h2> 
        <h3>{author}</h3> 
        <p>{description}</p>
        <div style={isLess ? {} : { display: 'none' }}>
        <div>{url}</div> 
        <div>{publisher} {publicationDate}</div>
        <p>{detailedDescription}</p>
        </div>
      </div>
      
    </div>
  )
}

// const MoreBtn = (props) => {
//   return (
//     <button onClick={HandleClick}>abc</button>
//   )
// }

// const HandleClick = () => {
//   setBook("help")
// }






  ReactDOM.render(<App />, document.querySelector('#root'))