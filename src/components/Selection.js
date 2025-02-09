
import React, { useState } from 'react'

const Selection = ({ nextBackground}) => {
    const [background, setBackground] = useState("")
  return (
    <div 
    className='fix-box'
    style={{backgroundColor: background,
            width: "200px",
            height: "200px",
            margin: "20px",
            display: "inline-block",
            cursor: "pointer",
            color:"white",
            border: "1px solid black",
            textAlign: 'center',
            padding: "20px"
    }} 
    onClick={()=> setBackground(nextBackground)}
    >Selection</div>
  )
}

export default Selection