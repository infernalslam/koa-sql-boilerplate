'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('coupon_user', {
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
        userRoleId: {
          field: 'user_role_id',
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false
        },
        couponDetailId: {
          field: 'coupon_detail_id',
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
      })
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
