const bookshelf = require('../bookshelf');

require('./User');

class Posts extends bookshelf.Model {
    get tableName() {
        return 'posts';
    }

    get hasTimestamps() {
        return true;
    }

    users() {
        return this.belongsTo('User', 'user_id');
    }
}

module.exports = bookshelf.model('Posts', Posts)