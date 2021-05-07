import React from 'react';

function Button({ event, name }) {
    return (
        <button onClick={event} style={{ margin: "5px 5px",padding:"5px 5px" }}>{name}</button>
    );
}

export default Button;
