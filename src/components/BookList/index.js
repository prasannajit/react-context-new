import React from "react";
import BookShow from '../BookShow';
import {useBooksContext} from '../../hooks';
const BookList = ()=>{
    const {books} = useBooksContext();
    const renderBooks = (books)=>{
        return books.map((book)=>{
            return <li key={book.id}><BookShow book={book}/></li>
        });
    };
    return(
        <ul>
            {renderBooks(books)}
        </ul>
    );
};

export default BookList;