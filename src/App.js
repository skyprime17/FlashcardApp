import React, { useState, useRef } from 'react';
import FlashcardList from './FlashcardList';
import './App.css'
import SAMPLE_FLASHCARDS from './BWL_FLASHCARDS.js'

function App() {
  const[flashcards] = useState(SAMPLE_FLASHCARDS);
  
  return (
    <>
    <div className="header">BWL Karteikarten für die Klausur am 26.02.2021
      <div className="contact">Bei Fragen und Anregungen:<br></br> skyprime_17#2305 auf Discord</div>
      </div>
    <div className="container">
    <FlashcardList flashcards= {flashcards} />
    </div>
    </>
  );
}


export default App;
