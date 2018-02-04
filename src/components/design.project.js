import React from 'react'

import { Carousel, Header } from './'

export const DesignProject = ({ project }) => {
    const { categories, date, description, media, roles, title } = project
    return <div className="design-project-component-container flex-col">
        <Header title={title} />
        <div className="banner-container">
            <img alt="" src={media[0].url}></img>
        </div>
        <div className="project-details">
            <div>
                <h3 className="semi-bold">{title}</h3>
                <span>{categories.join(' • ')}</span>
                <p className="hidden-mobile hidden-tablet">{description}</p>
            </div>
            <div className="roles">
                <h3 className="semi-bold">Role</h3>
                {roles.map(role => <div key={role}>{role}</div>)}
            </div>
            <div className="date">
                <h3 className="semi-bold">Project Date</h3>
                <div>{date}</div>
            </div>
            <p className="description hidden-desktop">{description}</p>
        </div>
        <div className="hidden-mobile hidden-tablet project-images">
            <div className="carousel-container">
                <Carousel
                    images={media.slice(1, media.length - 3)}
                />
            </div>
            <div className="images-container">
                <img alt="" src={media[media.length - 3].url}></img>
                <div className="row flex-row">
                    <img alt="" src={media[media.length - 2].url}></img>
                    <img alt="" src={media[media.length - 1].url}></img>
                </div>
            </div>
        </div>
        <div className="hidden-desktop project-images">
            <div className="carousel-container">
                <Carousel
                    images={media.slice(1, media.length - 2)}
                />
            </div>
            <div className="images-container">
                <img alt="" src={media[media.length - 2].url}></img>
                <img alt="" src={media[media.length - 1].url}></img>
            </div>
        </div>
    </div>
}
