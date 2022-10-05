"use strict";
import bcrypt from "bcrypt";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Brand extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Brand.init(
		{
			brand_name: DataTypes.STRING,
			brand_logo: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Brand",
		},
	);

	
	return Brand;
};
