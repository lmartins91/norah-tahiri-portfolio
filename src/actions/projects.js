import { ProjectsService } from '../services/projects.service'

export const fetchProjects = (criteria) => {
    return (dispatch) => {
        dispatch(requestProjects(criteria))
        return ProjectsService.getProjects(criteria)
            .then(projects => dispatch(receiveProjects(criteria, projects)))
    }
}

const requestProjects = (criteria) => ({
    type: 'REQUEST_PROJECTS',
    criteria
})

const receiveProjects = (criteria, projects) => ({
    type: 'RECEIVE_PROJECTS',
    criteria,
    projects
})


export const fetchProjectById = (id) => {
    return (dispatch, getState) => {
        if (getState().entities.projects[id]) return null
        
        dispatch(requestProjectById(id))
        return ProjectsService.getProjectById(id)
            .then(project => dispatch(receiveProjectById(id, project)))
    }
}

const requestProjectById = (id) => ({
    type: 'REQUEST_PROJECT',
    id
})

const receiveProjectById = (id, project) => ({
    type: 'RECEIVE_PROJECT',
    id,
    project
})