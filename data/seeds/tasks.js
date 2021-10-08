
exports.seed = async function(knex) {
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: 'go to class', task_notes: 'watch the lecture', project_id: 1},
    {task_description: 'do module project', task_notes: 'work on project', project_id: 1}
  ])
};
