import React from 'react';

const Dots = ({ onClick, active }) => {
    return (
        <li
            className={active ? "dots--active" : "dots"}
            onClick={() => onClick()}
        >
            <span className={active ? "dots--active" : "dots"}></span>
        </li>
    )
}

export default Dots;