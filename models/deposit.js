'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deposit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  deposit.init({
    date: DataTypes.DATE,
    amount: DataTypes.DECIMAL,
    payment_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'deposit',
  });
  return deposit;
};