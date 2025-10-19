import { Student } from "../models/student.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export async function getAllStudents({ page, perPage, sortBy, sortOrder }) {

    const limit = perPage;
    const skip = page > 0 ? (page - 1) * perPage : 0;
    const studentQuery = Student.find();
    const studentCount = await Student.find().merge(studentQuery).countDocuments();

    const students = await Student.find().skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec();


    const paginationData = calculatePaginationData(studentCount, perPage, page);

    return {
        data: students,
        ...paginationData,
    }

};

export function getStudentById(studentId) {
    return Student.findById(studentId);

};

export function createStudent(payload) {
    const student = Student.create(payload);
    return student;

}

export function deleteStudent(studentId) {
    const data = Student.findByIdAndDelete(studentId);
    return data;
};

export async function upsertStudent(studentId, payload) {
    const data = await Student.findByIdAndUpdate(studentId, payload, {
        new: true,
        upsert: true,
        includeResultMetadata: true,
    });

    console.log("data", data);

    return {
        value: data.value,
        updatedExisting: data.lastErrorObject.updatedExisting,
    }

};

export async function patchStudent(studentId, payload) {
    const data = await Student.findByIdAndUpdate(studentId, payload, { new: true });
    return data;
}