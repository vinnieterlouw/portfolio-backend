"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      expense.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  expense.init(
    {
      description: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      amount: DataTypes.DECIMAL,
      status: DataTypes.STRING,
      category: DataTypes.STRING,
      payment_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "expense",
    }
  );
  return expense;
};
