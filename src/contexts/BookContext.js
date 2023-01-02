import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [Books, dispatch] = useReducer(BookReducer, [], () => {
        const localBooksData = localStorage.getItem("books");
        return localBooksData ? JSON.parse(localBooksData) : [];
    });
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(Books));
    }, [Books]);
    return (
        <BookContext.Provider value={{Books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

