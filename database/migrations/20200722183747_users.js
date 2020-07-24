
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.boolean('active').defaultTo('true').notNull();
        table.integer('role_id').references('id').inTable('roles').notNull();
        table.string('username').notNull().unique();
        table.string('password', 24).notNull();
        table.string('profile_image_url', 255);
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
