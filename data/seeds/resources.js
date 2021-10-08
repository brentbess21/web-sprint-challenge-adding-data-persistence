
exports.seed = async function(knex) {
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'computer', resource_description: 'macbook pro'},
    {resource_name: 'tablet', resource_description: 'ipad'}
  ])
};
