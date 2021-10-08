
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'Learn Node.js', project_description: 'Learn everything!!'},
    {project_name: 'Pass Sprint Challenge', project_description: 'Remember everything!!'}
  ])
};
