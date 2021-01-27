import React, { useState , useEffect, useRef} from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef();
    const backEl = useRef();

    function setMaxHeight(){
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 150));
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer])
    useEffect( () => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight);
    })


    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style = {{ height : height}}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>Q:
                {flashcard.question}
            </div>  
            <div className="back" ref={backEl}>A:{flashcard.answer}</div>
        </div>
    )
}
