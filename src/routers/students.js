import { Router } from "express";
import { createStudentController, deleteStudentController, getAllStudentsController, getStudentByIdController, patchStudentController, upsertStudentController } from "../controllers/students.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createStudentSchema, updateStudentSchema } from "../validation/students.js";
import { isValidID } from "../middlewares/isValidID.js";

const router = Router();

router.get("/students", ctrlWrapper(getAllStudentsController));

router.get("/students/:id", isValidID, ctrlWrapper(getStudentByIdController));

router.post("/students", validateBody(createStudentSchema), ctrlWrapper(createStudentController));

router.delete("/students/:id", isValidID, ctrlWrapper(deleteStudentController));

router.put("/students/:id", isValidID, validateBody(createStudentSchema), ctrlWrapper(upsertStudentController));

router.patch("/students/:id", isValidID, validateBody(updateStudentSchema), ctrlWrapper(patchStudentController));

export default router;