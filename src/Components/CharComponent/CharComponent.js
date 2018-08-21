import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        width: '30px',
        border: '1px solid black',
        textAlign: 'center',
    }
    
    return (
        <div style={style} onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    );
}

export default charComponent;