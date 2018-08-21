import React from 'react';

const validationComponent = (props) => {
    let textMsg = 'Text too short';

    if(props.lengthText > 4)
        textMsg = 'Text long enough';

    return (
        <div>
            <p>{textMsg}</p>
        </div>
    );
}

export default validationComponent;