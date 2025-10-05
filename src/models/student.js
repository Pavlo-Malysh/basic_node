import mongoose from "mongoose";

const studentShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    onDuty: {
        type: Boolean,
        default: false,
    }
});

export const Student = mongoose.model("Student", studentShema);