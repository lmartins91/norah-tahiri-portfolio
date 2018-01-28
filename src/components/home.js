import React from 'react'
import { Link } from 'react-router-dom'

import { Footer, Header } from './index'

export const Home = () => (
    <div className="home-container">
        <Header />
        <div className="projects-container">
            <Link to="/design"
                className="project-detail-container"
                style={{ 'backgroundImage': 'url(https://s3.us-east-2.amazonaws.com/norah-tahiri-images/design-1/HR-1.jpg)' }}>
                <div className="hover-container">
                    <h3>View Design</h3>
                </div>
            </Link>
            <Link to="/photography"
                className="project-detail-container"
                style={{ 'backgroundImage': 'url(https://s3.us-east-2.amazonaws.com/norah-tahiri-images/design-2/BR-2.jpg)' }}>
                <div className="hover-container">
                    <h3>View Photography</h3>
                </div>
            </Link>
        </div>
        <Footer />
    </div>
)