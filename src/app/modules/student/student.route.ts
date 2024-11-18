import express from "express";
import { studentController } from "./student.controller";
const router = express.Router();


// will call controller function

router.post('/create-student', studentController.createStudent);
router.get('/get-students', studentController.getAllStudent);
router.get('/get-student/:id', studentController.getStudent);

export const StudentRoutes = router;