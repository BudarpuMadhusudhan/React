import React, { useState } from 'react'

export default function DataShare() {
    const [name, setName] = useState('')
    return (
        <div>
            <input 
                type='text' 
                placeholder='Name' 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <h4>{name}</h4>
        </div>
    )
}
