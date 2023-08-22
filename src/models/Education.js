import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    institute:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    yearInitiated: {
        type: Number,
        required: true
    },
    yearGraduated: {
        type: Number,
        required: true
    }
})

const Education = mongoose.model('Education', educationSchema);

export default Education;