import {useState} from "react"
function App() {
const [color,setColor] = useState("olive")
  return (
    <>
     <div className="h-screen duration-200 w-Full" style={{backgroundColor:color}}>

     </div>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-8">
        <div className="flex justify-between gap-3 px-3 py-2 font-mono text-xl font-thin text-white bg-white rounded-2xl ">
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"red"} } onClick={()=>setColor("red")}>Red</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"yellow"}} onClick={()=>setColor("Yellow")}>Yellow</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"Grey"}} onClick={()=>setColor("Grey")}>Grey</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"Pink"}} onClick={()=>setColor("Pink")}>Pink</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"Purple"}} onClick={()=>setColor("Purple")}>Purple</button>
          {/* <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"Lavender"}} onClick={()=>setColor("Lavender")}>Lavender</button> */}
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"#938a8a52"}} onClick={()=>setColor("White")}>White</button>
          <button className="p-2 px-4 shadow-lg outline-none rounded-xl" style={{background:"Black"}} onClick={()=>setColor("Black")}>Black</button>
        </div>

      </div>
    </>
  )
}

export default App
