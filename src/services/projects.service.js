import * as _ from 'lodash'
import renderHTML from 'react-render-html'

import projectsJSON from '../../assets/projects.json'

const projects = projectsJSON.map(p => ({ ...p, description: renderHTML(_.unescape(p.description)) }))

export class ProjectsService {
    
    static getProjects() {
        return Promise.resolve(projects)
    }
    
    static getProjectById(id) {
        return Promise.resolve(projects.find(p => p.id === +id))
    }
    
}