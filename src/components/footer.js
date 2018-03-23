import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => (
    <div className="footer-component">
        <Link to="/design">
            <h3>Designer</h3>
        </Link>
        <h3 className="separator">•</h3>
        <Link to="/photography">
            <h3>Photographer</h3>
        </Link>
    </div>
)