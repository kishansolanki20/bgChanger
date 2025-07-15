import { useState } from "react"


function App() {
  const [color,setColor]= useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-blue-950">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => {setColor("green")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => {setColor("red")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"red"}}>red</button>
          <button onClick={() => {setColor("blue")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => {setColor("violet")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={() => {setColor("gray")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"gray"}}>Gray</button>
          <button onClick={() => {setColor("lavender")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"lavender"}}>Lavender</button>
          <button onClick={() => {setColor("purple")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => {setColor("yellow")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => {setColor("orange")}} className="outline-none px-3 rounded-xl" style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
