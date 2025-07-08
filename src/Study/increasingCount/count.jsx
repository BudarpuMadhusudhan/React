import React, { useState, useEffect } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `${name} incresed count for ${count}`
        return ()=>{
            console.log('Macha Cleaned');
        }
    },[count,name])

    return (
        <div>
            <input type="text" onChange={e => { setName(e.target.value) }}></input>
            <h1> {name} is making Count : {count} Increase</h1>
            <button onClick={() => setCount(count + 1)}> Click Here </button>
        </div>
    )
}
