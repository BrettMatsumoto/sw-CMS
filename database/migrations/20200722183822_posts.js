
exports.up = function (knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id');
        table.integer('user_id').notNull().references('id').inTable('users').onDelete('CASCADE');
        table.string('title', 255).notNull();
        table.string('message', 10000).notNull();
        table.boolean('active').defaultTo('true').notNull();
        table.boolean('approved').defaultTo('true').notNull();
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('post');
};
