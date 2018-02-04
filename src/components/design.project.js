import React from 'react'

import { Carousel, Header } from './'

export const DesignProject = ({ project }) => (
    <div className="design-project-component-container flex-col">
        <Header title={project.title} />
        <div className="banner-container">
            <img alt="" src={project.media[0].url}></img>
        </div>
        <div className="project-details">
            <div>
                <h3 className="semi-bold">{project.title}</h3>
                <span>{project.categories.join(' • ')}</span>
                <p className="hidden-tablet">{project.description}</p>
            </div>
            <div>
                <h3 className="semi-bold">Role</h3>
                {project.roles.map(role => <div key={role}>{role}</div>)}
            </div>
            <div>
                <h3 className="semi-bold">Project Date</h3>
                <div>{project.date}</div>
            </div>
            <p className="hidden-desktop">{project.description}</p>
        </div>
        
        {/* Desktop */}
        <div className="hidden-mobile hidden-tablet">
            <div className="carousel-container">
                <Carousel
                    images={media.slice(1, media.length - 3)}
                />
            </div>
            <div className="images-container">
                <img alt="" src={project.media[project.media.length - 3].url}></img>
                <div className="row flex-row">
                    <img alt="" src={project.media[project.media.length - 2].url}></img>
                    <img alt="" src={project.media[project.media.length - 1].url}></img>
                </div>
            </div>
        </div>
        
        {/* Tablet & Mobile */}
        <div className="hidden-desktop">
            <Carousel
                images={media.slice(1, media.length - 2)}
            />
            <div className="images-container">
                <img alt="" src={project.media[project.media.length - 2].url}></img>
                <img alt="" src={project.media[project.media.length - 1].url}></img>
            </div>
        </div>
    </div>
)