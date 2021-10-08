// build your `Task` model here
const db = require('./../../data/dbConfig');

async function getTasks() {
   const taskInfo = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id', 
            't.task_description',
            't.task_notes', 
            't.task_completed', 
            'p.project_name', 
            'p.project_description'
            )
        .orderBy('t.task_id')

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
    const newTaskInfo =  await db('tasks').where('task_id', task_id).first()

    if(newTaskInfo.task_completed === 0 || newTaskInfo.task_completed === undefined) {
        const falseNewTask = { ...newTaskInfo, task_completed: false}
        return falseNewTask
    } else {
        const trueNewTask = { ...newTaskInfo, task_completed: true}
        return trueNewTask
    }
   
}

module.exports = {
    getTasks,
    insertTask
}