'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('user', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: true,
          autoIncrement: true
        },
        userReplyToken: {
          field: 'user_reply_token',
          type: Sequelize.TEXT,
          allowNull: false
        },
        displayName: {
          field: 'display_name',
          type: Sequelize.TEXT,
          allowNull: true
        },
        image: {
          field: 'image',
          type: Sequelize.TEXT,
          allowNull: true
        },
        createdAt: {
          field: 'created_at',
          type: Sequelize.DATE,
          allowNull: true
        },
        updatedAt: {
          field: 'updated_at',
          type: Sequelize.DATE,
          allowNull: true
        }
      },
      { charset: 'utf8' },
      { collate: 'utf8mb4_unicode_ci' })
    ]
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
