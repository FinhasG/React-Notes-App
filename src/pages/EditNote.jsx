import { Link, useParams, useNavigate } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from "react";
import createDate from "../Components/createDate";
import {RiDeleteBin6Line} from 'react-icons/ri'

const NewNote = ({notes, setNotes}) => {

  const {id}=useParams();
  const note=notes.find((item) => item.id==id)
  const [title, setTitle]=useState(note.title)
  const [detail, setDetail]=useState(note.detail)
  const date=createDate()
  const navigate=useNavigate()


  const handleUpdate = (e) =>{
    e.preventDefault();

    if(title && detail){
      const updatedNote = {...note, title, detail, date}

      const newNote=notes.map(item => {
        if(item.id == id){
          item=updatedNote
        }
        return item;
      })
      setNotes(newNote);
    }
    navigate('/')
  }

  const handleDelete = () =>{
    const newNote= notes.filter(item => item.id != id);
    setNotes(newNote)
    navigate('/')
  }


  return (
    <section>
      <header className="create-note__header">
      <Link to="/" className="btn"><IoIosArrowBack/></Link>
      <button className="btn lg primary" onClick={handleUpdate}>Save</button>
      <button className="btn sm danger" onClick={handleDelete}><RiDeleteBin6Line/></button>
    </header>
    <form className="create-note__form" onSubmit={handleUpdate}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
      <textarea rows="30" placeholder="Note details..." value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
    </form>
    
    </section>
  )
}

export default NewNote