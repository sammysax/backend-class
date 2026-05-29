import express from "express";
import { getStudent, createStudent } from "../controller/studentController.js";
const router = express.Router();

router.get('/students', getStudent);
router.post('/create-student', createStudent);
// router.get('/congregation', getCongregation);
// router.delete //('/students/:id', deleteStudent);
// router.post //('/students', createStudent);
// router.put //('/students/:id', updateStudent);
// router.get //('/students/:id', getStudentById);

export default router;