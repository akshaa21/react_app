import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-300"
    style={{backgroundColor: color}}
    >
     <div className="fixed flex flex-col justify-center
    py-4  right-2 bottom-36 m-3">
      <div className="flex flex-col justify-center
      gap-4 shadow-xl bg-gray-900 px-2 py-2 rounded-3xl">
        <button 
         onClick={()=>setColor("red")}
         className="outline-none px-4 py-2 rounded-full text-white"
         style={{backgroundColor: "red"}}>Red</button>

        <button 
         onClick={()=>setColor("green")}
         className="outline-none px-4 py-2 rounded-full text-white"
         style={{backgroundColor: "green"}}>Green</button>

        <button 
         onClick={()=>setColor("blue")}
         className="outline-none px-4 py-2 rounded-full text-white"
         style={{backgroundColor: "blue"}}>Blue</button>

        <button 
         onClick={()=>setColor("olive")}
         className="outline-none px-4 py-2 rounded-full text-white"
         style={{backgroundColor: "olive"}}>Olive</button>

        <button 
         onClick={()=>setColor("black")}
         className="outline-none px-4 py-2 rounded-full text-white"
         style={{backgroundColor: "black"}}>Black</button> 

         <button 
          onClick={()=>setColor("cyan")}
          className="outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "cyan"}}>Cyan</button>

          <button 
         onClick={()=>setColor("yellow")}
         className="outline-none px-4 py-2 rounded-full text-white"
         style={{backgroundColor: "yellow"}}>Yellow</button>     
   
        </div>
    </div>
    </div>
  )
}

export default App
