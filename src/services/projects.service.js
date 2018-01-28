import projects from '../../assets/projects.json'

export class ProjectsService {
    // Temp. Will eventually connect to S3 buckets
    
    static getProjects() {
        return Promise.resolve(projects)
    }
    
    static getProjectById(id) {
        return Promise.resolve(projects.find(p => p.id === +id))
    }
    
}