module.exports = function (sequelize, Sequelize) {
  const coupon = sequelize.define('coupon', {
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
      type: Sequelize.ENUM('active', 'inactive'),
      allowNull: false,
      defaultValue: 'active'
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
    tableName: 'coupon',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    collate: 'utf8mb4_unicode_ci'
  })

  return coupon
}
