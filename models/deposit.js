"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class deposit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      deposit.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  deposit.init(
    {
      date: DataTypes.DATEONLY,
      amount: DataTypes.DECIMAL,
      deposit_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "deposit",
    }
  );
  return deposit;
};
