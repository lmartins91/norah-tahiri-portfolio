import React from 'react'

export const Button = ({ onClick, text }) => (
    <button className="button-component-container"
        onClick={onClick}>
        <h3 className="button-component-text">{text}</h3>
    </button>
)