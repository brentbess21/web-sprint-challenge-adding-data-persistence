// build your `Task` model here
const db = require('./../../data/dbConfig');

async function getTasks() {
   const taskInfo = await db('tasks as t')
        .leftJoin('projects as p')
        .select(
            't.task_id', 
            't.task_description',
            't.task_notes', 
            't.task_completed', 
            'p.project_name', 
            'p.project_description'
            )
        .groupBy('t.task_id')

    const updatedTaskInfo = []

    taskInfo.forEach(task => {
        if(task.task_completed === 0 || task.task_completed === undefined) {
            const falseTask = { ...task, task_completed: false}
            updatedTaskInfo.push(falseTask)
        } else {
            const trueTask = {...task, task_completed: true}
            updatedTaskInfo.push(trueTask)
        }
    })
    return updatedTaskInfo
}

async function insertTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return db('tasks').where('task_id', task_id).first()
}

module.exports = {
    getTasks,
    insertTask
}