import { combineReducers } from 'redux'

import { menu } from './menu'
import { projects } from './projects'

const entities = (state = { projects: {} }, action) => ({
    projects: projects(state.projects, action)
})

const rootReducer = combineReducers({
    entities,
    menu
})

export default rootReducer