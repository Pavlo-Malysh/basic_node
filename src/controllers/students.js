import { createStudent, deleteStudent, getAllStudents, getStudentById, patchStudent, upsertStudent } from "../services/student.js";
import createHttpError from "http-errors";

export const getAllStudentsController = async (req, res) => {
    const students = await getAllStudents();

    res.json({
        status: 200,
        message: "Students get successfully",
        data: students,
    });

};



export const getStudentByIdController = async (req, res, next) => {
    const { id } = req.params;

    const student = await getStudentById(id);
    if (!student) {
        throw createHttpError(404, "Student not found");
    }

    res.json({
        status: 200,
        message: `Successfully found student with id ${id}`,
        data: student,
    });
};

export const createStudentController = async (req, res) => {
    const student = await createStudent(req.body);

    res.status(201).json({
        status: 201,
        message: "Succesfully created a student!",
        data: student,
    });
};

export const deleteStudentController = async (req, res, next) => {
    const { id } = req.params;

    const student = await deleteStudent(id);

    if (!student) {
        next(createHttpError(404, "Student not found"));
        return;
    };

    res.status(204).send();

};

export const upsertStudentController = async (req, res, next) => {
    const { id } = req.params;

    const student = await upsertStudent(id, req.body);

    if (!student) {
        next(createHttpError(404, "Student not found"));
        return;
    }

    if (student.updatedExisting) {
        return res.status(200).json({
            status: 200,
            message: "Student updated succesfully",
            data: student.value
        });
    };

    res.status(201).json({
        status: 201,
        message: "Student created succesfully",
        data: student.value,
    })
};

export const patchStudentController = async (req, res, next) => {
    const { id } = req.params;

    const student = await patchStudent(id, req.body);
    if (!student) {
        next(createHttpError(404, "Student not found"));
        return;
    }

    res.status(200).json({
        status: 200,
        message: "Student update succesfully",
        data: student,
    })
}