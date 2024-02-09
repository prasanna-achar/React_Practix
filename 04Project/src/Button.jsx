export default function Button(props){
    let color = props.Color;
    return <button onClick={()=> setColor(props.Color)}
    style={{backgroundColor:color,
            color:color === 'white'||color === 'lavender'?'black': 'white'}}
    className="outline-none px-4 py-1 rounded-full  shadow-lg">{props.Name}</button>
}