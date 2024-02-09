import { useState } from 'react'

import './App.css'



function App() {
  const Colors = ['black', 'white', 'olive','red','blue', 'green', 'yellow', 'gray', 'pink','lavender']
  
  const [color , setColor] = useState(Colors[parseInt(Math.random() * Colors.length)])
  
  function Button(props){
    let color = props.Color;
    return <button 
    onClick={()=> setColor(props.Color)}
    style={{backgroundColor:color,
            color:color === 'white'||color === 'lavender'?'black': 'white'}}
    className="outline-none px-4 py-1 rounded-full  shadow-lg hover:border-[1px] border-orange-500">{props.Name}</button>
}

  return (
  <div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        {/* <button onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("olive")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "olive"}}>Olive</button>
        <button onClick={() => setColor("gray")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "gray"}}>Gray</button>
        <button onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={() => setColor("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={() => setColor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={() => setColor("lavender")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "lavender"}}>Lavender</button>
        <button onClick={() => setColor("white")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "white"}}>White</button>
        <button onClick={() => setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}>Black</button> */}
          <Button Color="red" Name='Red' onClick={() => setColor('red')} />
          <Button Color="green" Name='Green' onClick={() => setColor('green')} />
          <Button Color="blue" Name='Blue' onClick={() => setColor('blue')} />
          <Button Color="gray" Name='Gray' onClick={() => setColor('gray')} />
          <Button Color="olive" Name='Olive' onClick={() => setColor('olive')} />
          <Button Color="yellow" Name='Yellow' onClick={() => setColor('yellow')} />
          <Button Color="pink" Name='Pink' onClick={() => setColor('pink')} />
          <Button Color="lavender" Name='Lavender' onClick={() => setColor('lavender')} />
          <Button Color="white" Name='White' onClick={() => setColor('white')} />
          <Button Color="black" Name='Black' onClick={() => setColor('black')} />
        </div>
      </div>
  </div>
  )
}

export default App
