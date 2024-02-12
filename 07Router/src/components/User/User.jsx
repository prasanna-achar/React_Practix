import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {UserID} = useParams()
    return(
        <div>User : {UserID}</div>
    )
}

export default User