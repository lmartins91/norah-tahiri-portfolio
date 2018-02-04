import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as _ from 'lodash'

import { fetchProjects } from '../actions'
import { Button, Carousel, Detail, Header } from '../components'
import { getProjectsByType } from '../selectors'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            projectType: props.match.path.substring(1)
        }
    }
    
    componentWillMount() {
        this.props.fetchProjects({ type: this.state.projectType })
    }
    
    goToProject(id) {
        this.props.history.push(`/${this.state.projectType}/${id}`)
    }
    
    render() {
        const { currentIndex } = this.state
        const { projects } = this.props
        
        if (!_.size(projects)) return null
        
        const images = projects.reduce((acc, curr) => {
            return _.size(curr.media) ? [ ...acc, curr.media[0] ] : acc
        }, [])
        
        const goToProjectBtn = <Button text="View" onClick={() => this.goToProject(projects[currentIndex].id)} />
        
        const content = [
            <h3 key="1" className="title">{projects[currentIndex].title}</h3>,
            <span key="2">{projects[currentIndex].categories.join(' • ').split()}</span>
        ]
        
        return <div className="projects-component-container">
            <Header title={this.state.projectType} />
            <Carousel
                images={images}
                onChange={(index) => this.setState({ currentIndex: index })}
            />
            <Detail orientation="horizontal">
                {/* Mobile & Tablet */}
                <div className="hidden-desktop flex-col justify-content-center align-items-center"
                    onClick={() => this.goToProject(projects[currentIndex].id)}>
                    {content}
                </div>
                {/* Desktop */}
                <div className="hidden-mobile hidden-tablet flex-col justify-content-center align-items-center">
                    {content}
                    {goToProjectBtn}
                </div>
            </Detail>
            <div className="tablet-btn-container hidden-mobile hidden-desktop">
                {goToProjectBtn}
            </div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    projects: getProjectsByType(state, ownProps)
})

const mapDispatchToProps = (dispatch) => ({
    fetchProjects: (criteria) => dispatch(fetchProjects(criteria))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects))