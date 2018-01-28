import { convertToEntity } from '../utilities/entities'

export const projects = (state = {}, action) => {
    switch (action.type) {
        
        case 'RECEIVE_PROJECTS':
            return {
                ...state,
                ...convertToEntity(action.projects)
            }
        
        case 'RECEIVE_PROJECT':
            return {
                ...state,
                [action.project.id]: action.project
            }
        
        default:
            return state
    }
}