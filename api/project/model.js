// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projectsInfo = await db('projects')
    const updatedProjectInfo = []
    
    projectsInfo.forEach(project => {
        if (project.project_completed === 0){
            const falseProject = { ...project, project_completed: false}
            updatedProjectInfo.push(falseProject)
        } else {
            const trueProject = {...project, project_completed: true}
            updatedProjectInfo.push(trueProject)
        }
    });
    return updatedProjectInfo
}

async function insertProject(project) {
    const updatedProjectInfo = []
    if (project.project_completed === 0 || project.project_completed === undefined){
        const falseProject = { ...project, project_completed: false}
        updatedProjectInfo.push(falseProject)
    } else {
        const trueProject = {...project, project_completed: true}
        updatedProjectInfo.push(trueProject)
    }
    const [project_id] = await db('projects').insert(updatedProjectInfo)
    return db('projects').where('project_id', project_id).first()
}


module.exports = {
    getProjects,
    insertProject
}