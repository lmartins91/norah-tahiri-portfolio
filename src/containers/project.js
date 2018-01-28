import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchProjectById } from '../actions'
import { DesignProject, PhotographyProject } from '../components'

class Project extends Component {
    componentWillMount() {
        this.props.fetchProjectById(this.props.match.params.projectId)
    }
    
    render() {
        const { project } = this.props
        if (!project) return null
        return (project.type == 'design') ?
            <DesignProject project={project} /> :
            <PhotographyProject project={project} />
    }
}

const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId]
})

const mapDispatchToProps = (dispatch) => ({
    fetchProjectById: (id) => dispatch(fetchProjectById(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project))