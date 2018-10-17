'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('user_role', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: true,
          autoIncrement: true
        },
        userPlayAmount: {
          field: 'user_play_amount',
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
          defaultValue: 0
        },
        status: {
          field: 'status',
          type: Sequelize.ENUM('active', 'inactive'),
          allowNull: false,
          defaultValue: 'active'
        },
        gameId: {
          field: 'game_id',
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false
        },
        userId: {
          field: 'user_id',
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false
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
