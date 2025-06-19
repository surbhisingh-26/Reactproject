import { useState } from "react"
import Xyz from "./components/header"


function App() {
  const [color , setColor]= useState('red')

  const handleClick = () => {
    setColor('blue');
  };
  return (
    <div>
      <Xyz/>
     <h1 style={{"color" : color}}>Surbhi Singh Parmar</h1> 
<button onClick={handleClick }>click</button>
    </div>
   
  )
}

export default App
