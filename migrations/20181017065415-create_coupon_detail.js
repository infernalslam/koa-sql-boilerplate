'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('coupon_detail', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: true,
          autoIncrement: true
        },
        couponCode: {
          field: 'coupon_code',
          type: Sequelize.TEXT,
          allowNull: false
        },
        status: {
          field: 'status',
          type: Sequelize.ENUM('active', 'inactive'),
          allowNull: false,
          defaultValue: 'active'
        },
        couponId: {
          field: 'coupon_id',
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
