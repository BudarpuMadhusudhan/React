import React, { useState } from 'react';
import Search from "./searchFiled";

function NavBar(props) {
    const [query, setQuery] = useState('');

    const handleInputChange = (val) => {
        setQuery(val);
        props.onChange(val);  // Send the value to parent
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary" style={{ backgroundColor: "gray" }}>
                <div className="container-fluid backgroung-colour">
                    <h4 style={{ fontFamily: 'fantasy', fontSize: 50 }}>
                        IPL Action {props.text}
                    </h4>
                    <Search onChange={handleInputChange} />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
