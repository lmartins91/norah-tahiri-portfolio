import { createSelector } from 'reselect'

import { convertFromEntity } from '../utilities/entities'

const getProjects = (state, props) => state.entities.projects
const getProjectType = (state, props) => props.match.path.substring(1)

export const getProjectsByType = createSelector(
    [getProjects, getProjectType],
    (projects, type) => convertFromEntity(projects).filter(p => p.type == type)
)