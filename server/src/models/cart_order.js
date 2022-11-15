"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart_order extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: "product_id", targetKey: "id" });
    }
  }
  cart_order.init(
    {
      user_id: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cart_order",
    }
  );

  return cart_order;
};
