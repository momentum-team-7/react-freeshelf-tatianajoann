import React, { useState } from 'react'


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
          <div><b>URL:</b> {url}</div> 
          <div><b>Publisher:</b> {publisher} </div>
          <div><b>Publication Date:</b> {publicationDate}</div>
          <p><b>Full Description:</b> {detailedDescription}</p>
          </div> 
        </div>
        <button onClick={onClick}>{isLess ? "Read Less" : "Read More"}</button>
      </div>
    )
  }

  export default Book