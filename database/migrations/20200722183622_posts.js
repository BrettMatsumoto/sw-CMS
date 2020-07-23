
exports.up = function (knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id');
        table.interger('user_id').notNull().references('id').inTable('users').onDelete('CASCADE');
        table.string('title', 255).notNull();
        table.string('message', 10000).notNull();
        table.boolean('active').notNull();
        table.boolean('approved').defaultTo('true').notNull();
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {

};
