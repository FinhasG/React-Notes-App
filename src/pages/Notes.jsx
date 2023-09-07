import  { useEffect, useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import {Link} from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import NoteItem from '../Components/NoteItem'


function Notes({ notes, setNotes }) {
  const [showSearch, setShowSearch] = useState(false)
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSerach = () => {
    setFilteredNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note
      }
    }))
  }

  useEffect(handleSerach, [text])

  return (
    <section>
      <header className="notes__header">
       
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" value={text} onChange={(e) => { setText(e.target.value); handleSerach() } } autoFocus placeholder='Keyword...' />}


        {/*<input type="text" autoFocus placeholder='Keyword...' />*/}
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose /> : <CiSearch />}</button>
      </header>
      <div className='notes__container'>
        {filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)}
      </div>
      <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}
export default Notes