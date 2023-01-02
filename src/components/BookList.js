import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

function BookList() {
    const { Books } = useContext(BookContext);
    return Books.length ? (
        <>
            <div className='book-list'>
                <ul>
                    {Books.map(book => {
                        return ( <BookDetails book={book} key={book.id}/> )
                    })}
                </ul>
            </div>
        </>
    ) : (
        <div className="empty">No books to read. Now it's free time...</div>
    )
}

export default BookList

