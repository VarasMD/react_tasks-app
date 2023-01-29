import React from "react";
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';

const iconTypes = {
    "check": color => ( <AiOutlineCheck className="Icon-svg Icon-svg--check" fill={color}/>),
    "delete": color => ( <TiDeleteOutline className="Icon-svg Icon-svg--delete" fill={color}/>),
};

function ToDoIcon({type, color = 'gray', onClick}) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
            >
                {iconTypes[type](color)}
        </span>
    )
}

export { ToDoIcon };