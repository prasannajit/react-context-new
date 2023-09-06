import React, { useEffect } from "react";
import BookCreate from "../BookCreate";
import BookList from "../BookList";
import {useBooksContext} from '../../hooks';

const App = ()=>{
    const {fetchBooks} = useBooksContext();
    useEffect(()=>{
        fetchBooks();
    },[fetchBooks]);

    return(
        <>
            <BookList />
            <BookCreate />
        </>
    );
};

export default App;