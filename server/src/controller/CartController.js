import * as services from "../services/brand_service";
import { brandValidate, bid, filename } from "../config/validatation";
import createError from "http-errors";
import joi from "joi";
const cloudinary = require("cloudinary").v2;

const addToCart = async (req, res, next) => {
  try {
   
  } catch (error) {
    next(error);
  }
};

module.exports = {
    addToCart
}

