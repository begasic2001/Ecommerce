"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("order_details", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			order_id: {
				type: Sequelize.INTEGER,
			},
			product_id: {
				type: Sequelize.INTEGER,
			},
			product_name: {
				type: Sequelize.STRING,
			},
			color: {
				type: Sequelize.STRING,
			},
			size: {
				type: Sequelize.STRING,
			},
			quantity: {
				type: Sequelize.STRING,
			},
			single_price: {
				type: Sequelize.STRING,
			},
			total_price: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("order_details");
	},
};
