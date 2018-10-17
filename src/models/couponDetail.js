module.exports = function (sequelize, Sequelize) {
  const coupon = sequelize.define('couponDetail', {
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
  }, {
    tableName: 'coupon_detail',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    collate: 'utf8mb4_unicode_ci'
  })

  return coupon
}
