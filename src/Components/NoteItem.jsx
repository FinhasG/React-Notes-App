import React from 'react'
import { Link} from 'react-router-dom'



const NoteItem = ({note}) => {
  
  return (
    <div className='noted'>
      <h4>{note.title.length > 20 ? (note.title.substr(0,20)) + '...' : note.title}</h4>
      <h4>{note.detail.length > 60 ? (note.detail.substr(0,60)) + '...' : note.detail}</h4>
      <div className='all'>
      <p>{note.date}</p>
      <Link to={`/edit-note/${note.id}`} >
       <button className="btn sm primary">Edit</button>
     </Link>
     
     
     </div>
  </div>
   )
}

export default NoteItem