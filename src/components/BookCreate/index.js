import React, { useState } from "react";
import { useBooksContext } from "../../hooks";

const BookCreate = ()=>{
    const {addBook} = useBooksContext();
    const [bookTitle, setBookTitle]=useState('');
    const handleInputChange = (event)=>{
        setBookTitle(event.target.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        // write code to populate the list
        addBook({id: crypto.randomUUID(),title: bookTitle})
        setBookTitle('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookTitle">Title</label>
            <input id="bookTitle" onChange={handleInputChange} type="text" maxLength={120} minLength={5} value={bookTitle} autoFocus/>
            <br/>
            <button>Submit</button>
        </form>
    );
};

export default BookCreate;