import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => (
    <div className="footer-component">
        <Link to="/design">
            <h3 className="hidden-mobile hidden-tablet">Designer</h3>
            <h3 className="hidden-desktop">Design</h3>
        </Link>
        <h3 className="separator">•</h3>
        <Link to="/photography">
            <h3 className="hidden-mobile hidden-tablet">Photographer</h3>
            <h3 className="hidden-desktop">Photography</h3>
        </Link>
    </div>
)