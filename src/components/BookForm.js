import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookForm() {
    const { dispatch } = useContext(BookContext);
    const [Title, setTitle] = useState("");
    const [Author, setAuthor] = useState("");
    const handleAddBook = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_BOOK", book: {
            title: Title, author: Author
        }})
        setTitle("");
        setAuthor("");
    }
    return (
        <>
            <form onSubmit={handleAddBook}>
                <input type="text" placeholder='book title' value={Title} onChange={(e) => {setTitle(e.target.value)}} required/>
                <input type="text" placeholder='book author' value={Author} onChange={(e) => {setAuthor(e.target.value)}} required/>
                <input type="submit" value="Add Book"/>
            </form>
        </>
    )
}

export default BookForm
