import React from 'react';
export default ({children})=> {
    return(
        <div className="top-bar">
            <h1>{children}</h1>
            <img className="logo" src="static/icons/logo.svg" alt="logo"/>
        </div>
    )   
}