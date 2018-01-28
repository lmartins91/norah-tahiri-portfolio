import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ title }) => {
    return <div className="header-component">
        <Link to="/">
            <h3>Norah Tahiri</h3>
        </Link>
        {title && (
            <div className="flex-row align-items-center">
                <span className="separator">•</span>
                <h3 className="medium">{title}</h3>
            </div>
        )}
    </div>
}