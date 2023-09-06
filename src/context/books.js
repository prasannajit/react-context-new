import React, { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

export const BooksProvider = ({children})=>{
    
    const [books,setBooks] = useState([]);
    
    const fetchBooks = useCallback(async()=>{
        const response = await fetch('http://localhost:3001/books',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        const books = await response.json();
        setBooks(books);
    },[]);
    //const fixedFetchBooks = useCallback(fetchBooks,[]);
    const addBook = async(book)=>{
        const response = await fetch('http://localhost:3001/books',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({title: book.title})
        });
        const newlyCreatedBook = await response.json();
        setBooks([...books,newlyCreatedBook]);
    }
    const updateBook = async(id, title)=>{
        const response = await fetch(`http://localhost:3001/books/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({title})
        });
        const bookRes = await response.json();
        console.log(bookRes);
        setBooks(books.map((book)=>{
            if(book.id === id){
                return {...book,...bookRes};
            }
            return book;
        }));
    }
    const deleteBook = async(id)=>{
        const response = await fetch(`http://localhost:3001/books/${id}`,{
            method: 'DELETE',
            mode: 'cors'
        });
        const bookRes = await response.json();
        console.log(bookRes);
        setBooks(books.filter((book)=>{
            return id!==book.id;
        }));
    }
    return (
        <BooksContext.Provider value={{books, fetchBooks, deleteBook, updateBook, addBook}}>
            {children}
        </BooksContext.Provider>
    )
};

export default BooksContext;