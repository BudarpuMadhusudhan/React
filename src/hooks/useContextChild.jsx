import React, { useContext } from 'react'
import UserContext from "../hooks/UserContext"

function useContextChild() {
    const user =useContext(UserContext)
    return ( <h2>I am from {user.place}</h2> );
}

export default useContextChild;