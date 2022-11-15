"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cart_orders", {
        // nhìn vào file txt mở mysql copy đoạn code xong chạy
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cart_orders");
  },
};
