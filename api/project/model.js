// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projectsInfo = await db('projects')
    const updatedProjectInfo = []
    
    projectsInfo.forEach(project => {
        if (project.project_completed === 0 || project.project_completed === undefined ){
            const falseProject = { ...project, project_completed: false}
            updatedProjectInfo.push(falseProject);
        } else {
            const trueProject = {...project, project_completed: true}
            updatedProjectInfo.push(trueProject);
        }
    });
    return updatedProjectInfo;
}

async function insertProject(project) {
    const [project_id] = await db('projects').insert(project)
    const newProjectInfo = await db('projects').where('project_id', project_id).first()
    

    if (newProjectInfo.project_completed === 0 || newProjectInfo.project_completed === undefined){
        const falseNewProject = { ...newProjectInfo, project_completed: false}
        return falseNewProject
    } else {
        const trueNewProject = {...newProjectInfo, project_completed: true}
        return trueNewProject
    }

}


module.exports = {
    getProjects,
    insertProject
}