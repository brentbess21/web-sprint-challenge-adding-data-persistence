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
    return (updatedProjectInfo)
}


module.exports = {
    getProjects
}