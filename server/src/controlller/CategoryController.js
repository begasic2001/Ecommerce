import { userValidate } from "../config/validatation";
import createError from "http-errors";
import db from "../models/index";
const category = async (req, res, next) => {
	// try {
	//     const category = await db.Category.findAll()
	//     if(!category){
	//         return reject(createError.NotFound())
	//     }
	//     return res.json({
	//         status:1,
	//         category
	//     })
	// } catch (error) {
	//     reject(error)
	// }
};
const categoryById = async (req, res, next) => {};
const storeCategory = async (req, res, next) => {};
const updateCategory = async (req, res, next) => {};
const deleteCategory = async (req, res, next) => {};

module.exports = {
	category,
	categoryById,
	storeCategory,
	updateCategory,
	deleteCategory,
};
