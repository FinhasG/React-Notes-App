import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Notes from "./pages/Notes"
import NewNote from "./pages/NewNote"
import EditNote from "./pages/EditNote"
import Headerr from './Components/Headerr'

import { useEffect, useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [] )
  const [darkMode, setDarkMode] = useState(false);
  

  useEffect(()=> {
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
      <main  className={`${darkMode && 'dark-mode'}`}>
      <div className='app'>
      <Headerr handleToggleDarkMode={setDarkMode} />
      <BrowserRouter>
      
    <Routes>
   
        <Route path="/" element={<Notes notes={notes}/>}/>
          <Route path="/create-note" element={<NewNote setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
    </Routes>
    </BrowserRouter>
    
      </div>
     
   

      </main>
  )
}

export default App