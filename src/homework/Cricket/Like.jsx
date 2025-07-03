import React from 'react';

function Like(props) {
    let heartFilled ="fa fa-heart";
     if(!props.liked) heartFilled = heartFilled + "-o"
        return<i 
        onClick={props.onClick}
        className={heartFilled} 
        aria-hidden="true" 
        style={{ cursor: 'pointer' }}
        ></i>
    }

export default Like;