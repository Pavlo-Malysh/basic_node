import { Student } from "../models/student.js";

export function getAllStudents() {
    return Student.find();
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