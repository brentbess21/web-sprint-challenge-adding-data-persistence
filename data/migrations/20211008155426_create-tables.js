
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.string('project_description')
        table.boolean('project_completed').defaultTo(false) 
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id') //come back to this
    })
    
    
};

exports.down = async function(knex) {
  await knex.schema 
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
