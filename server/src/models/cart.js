"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id", targetKey: "id" });
    }
  }
  Cart.init(
    {
      user_id: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );

  return Cart;
};
