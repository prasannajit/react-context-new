import React, { useState } from "react";
import BookEdit from '../BookEdit';
import { useBooksContext } from "../../hooks";
const BookShow = ({book})=>{
    const [showEdit, setShowEdit] = useState(false);
    const {updateBook,deleteBook} =useBooksContext();
    const handleDeleteButtonClick = (e)=>{
        deleteBook(book.id);
    };
    const handleEditButtonClick = (e)=>{
        setShowEdit(!showEdit);
    };
    const closeEditBookPanel = ()=>{
        setShowEdit(false);
    };
    const handleSubmit = (title)=>{
        updateBook(book.id,title);
        closeEditBookPanel();
    };
    return (
        <>
            {book.title}
            <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt={book.title}></img>
            <button onClick={handleDeleteButtonClick}>Delete</button>
            <button onClick={handleEditButtonClick}>Edit</button>
            {showEdit && <BookEdit handleSubmit={handleSubmit} title={book.title}/>}
        </>
    )
};

export default BookShow;