import { Router } from "express";
import { createStudentController, deleteStudentController, getAllStudentsController, getStudentByIdController, patchStudentController, upsertStudentController } from "../controllers/students.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/students", ctrlWrapper(getAllStudentsController));

router.get("/students/:id", ctrlWrapper(getStudentByIdController));

router.post("/students", ctrlWrapper(createStudentController));

router.delete("/students/:id", ctrlWrapper(deleteStudentController));

router.put("/students/:id", ctrlWrapper(upsertStudentController));

router.patch("/students/:id", ctrlWrapper(patchStudentController));

export default router;