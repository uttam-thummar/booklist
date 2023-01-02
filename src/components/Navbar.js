import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext'

function Navbar() {
    const { Books } = useContext(BookContext);
    return (
        <>
            <div className="navbar">
                <h1>Ninja Reading List</h1>
                <p>Currently you have { Books.length } books to get through...</p>
            </div>
        </>
    )
}

export default Navbar
