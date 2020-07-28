const bookshelf = require('../bookshelf');

require('./Role');
require('./Posts');

class User extends bookshelf.Model {
    get tableName() {
        return 'users';
    }

    get hasTimestamps() {
        return true;
    }

    roles() {
        return this.belongsTo('Role', 'role_id');
    }

    posts() {
        return this.hasMany('Posts', 'post_id');
    }
}

module.exports = bookshelf.Model('User', User);