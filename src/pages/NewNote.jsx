import { Link, useNavigate } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io';
import { useState } from "react";
import { v4 as uuid } from 'uuid';

import createDate from "../Components/createDate";

const NewNote = ({setNotes}) => {
  const [title,setTitle]=useState('')
  const [detail,setDetail]=useState('')
  const date=createDate();
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(title && detail){
      const note= {id:uuid(), title, detail, date}

      setNotes(prevNotes => [...prevNotes, note])

      navigate('/')
    
    }
   
  }

  return (
    <section>
      <header className="create-note__header">
      <Link to="/" className="btn"><IoIosArrowBack/></Link>
      <button className="btn lg primary" onClick={handleSubmit}>Save</button>
    </header>
    <form className="create-note__form" onClick={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
      <textarea rows="30" placeholder="Note details..." value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
    </form>
    </section>
  )
}

export default NewNote