import React, { useState } from "react";

const BookEdit = ({handleSubmit,title})=>{
    const [newTitle,setNewTitle]= useState(title);
    const handleChange = (e)=>{
        setNewTitle(e.target.value);
    };
    return(
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit(newTitle)}}>
            <label>Enter New Title</label>
            <input onChange={handleChange} value={newTitle} type="text"/>
            <button>Save</button>
        </form>
    );
};

export default BookEdit;