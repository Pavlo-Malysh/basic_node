import express from 'express';
import { Student } from "./models/student.js";

const app = express();

app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
});
app.get("/students", async (req, res) => {
    const students = await Student.find();

    res.json({
        status: 200,
        message: "Students get successfully",
        data: students,
    });

});

app.get("/students/:id", async (req, res) => {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (student === null) {
        return res.status(404).json({
            status: 404,
            message: "Student not found!",
        })
    }

    res.json({
        status: 200,
        message: "Student get successfully",
        data: student,
    })
})

export default app;

