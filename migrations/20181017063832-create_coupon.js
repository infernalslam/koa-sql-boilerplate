'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('coupon', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: true,
          autoIncrement: true
        },
        campaignName: {
          field: 'campaign_name',
          type: Sequelize.TEXT,
          allowNull: false
        },
        campaignDetail: {
          field: 'campaign_detail',
          type: Sequelize.TEXT,
          allowNull: true
        },
        startDate: {
          field: 'start_date',
          type: Sequelize.DATE,
          allowNull: true
        },
        endDate: {
          field: 'end_date',
          type: Sequelize.DATE,
          allowNull: true
        },
        status: {
          field: 'status',
          type: Sequelize.ENUM('active', 'inactive')
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
