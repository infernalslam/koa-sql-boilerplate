'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('score', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: true,
          autoIncrement: true
        },
        score: {
          field: 'score',
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
          defaultValue: 0
        },
        userRoleId: {
          field: 'user_role_id',
          type: Sequelize.INTEGER.UNSIGNED
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
