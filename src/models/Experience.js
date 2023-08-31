import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true,
        validate: {
          validator: values => values.every(value => typeof value === 'string'),
          message: 'Todos los valores en el campo "technologies" deben ser cadenas.',
        },
      }
})

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;