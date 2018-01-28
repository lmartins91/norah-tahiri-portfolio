import React, { Component } from 'react'
import numeral from 'numeral'

import { Carousel, Detail, Header } from './'

const ProjectHeader = ({ project }) => (
    <div className="flex-col justify-content-center align-items-center hidden-tablet">
        <h3>{project.title}</h3>
        <span>{project.categories.join(' • ').split()}</span>
    </div>
)

export class PhotographyProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            showTitle: true
        }
    }
    
    render() {
        const { project } = this.props
        const { currentIndex, showDetail } = this.state
        return <div className="photography-project-component-container">
            <Header title={project.title} />
            <Carousel
                images={project.media}
                onCurrentIndexChange={(currentIndex) => this.setState({ currentIndex })}
                onImageClick={(index) => this.setState({ currentIndex: index })}
            />
            <Detail
                onToggle={(isOpen) => this.setState({ showTitle: !isOpen })}
                showToggle={true}
                showDetail={false}
                titleJSX={<ProjectHeader project={project} />}>
                <div className="photo-detail">
                    <h3 className="semi-bold">{project.title}</h3>
                    <p>{project.media[currentIndex].description}</p>
                    <div className="count">
                        <span className="medium">{numeral(currentIndex + 1).format('00')}</span>
                        <span>of</span>
                        <span className="medium">{numeral(project.media.length).format('00')}</span>
                    </div>
                </div>
            </Detail>
            <div className="project-title-container hidden-mobile hidden-desktop">
                {this.state.showTitle && (
                    <h3 className="medium">{project.title}</h3>
                )}
            </div>
        </div>
    }
}