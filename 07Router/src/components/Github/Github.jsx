import React, { useEffect, useState } from "react";


function Github(){
    const[data, setData] = useState("");
    useEffect (() => {
        fetch('https://api.github.com/users/prasanna-achar')
        .then(res => res.json())
        .then(data=> setData(data))
    })
    return (
        <div className="text-center bg-gray-500 text-white p-4 
        text-3xl">github followers: {data['followers']}
        <img src={data['avatar_url']} alt="Git picture" />

        </div>
    )
}

export default Github