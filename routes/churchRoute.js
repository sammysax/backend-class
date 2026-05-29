import express from "express";
import { getCongregation } from "../controller/churchController1.js";

const router = express.Router();

router.get('/congregation', getCongregation);


export default router;