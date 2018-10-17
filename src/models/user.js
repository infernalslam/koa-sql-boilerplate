module.exports = function (sequelize, Sequelize) {
  const User = sequelize.define('user', {
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
  }, {
    tableName: 'user',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    collate: 'utf8mb4_unicode_ci'
  })

  return User
}
