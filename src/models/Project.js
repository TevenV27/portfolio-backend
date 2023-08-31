import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: value => typeof value === 'string',
      message: 'El campo "title" debe ser una cadena.',
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: value => typeof value === 'string',
      message: 'El campo "description" debe ser una cadena.',
    },
  },
  technologies: {
    type: [String],
    required: true,
    validate: {
      validator: values => values.every(value => typeof value === 'string'),
      message: 'Todos los valores en el campo "technologies" deben ser cadenas.',
    },
  },
  image: {
    type: String,
    required: true,
    match: [
      /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
      'El campo "image" debe ser una URL válida.',
    ],
  },
  siteUrl:{
    type: String,
    required: true,
    match: [
      /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
      'El campo "siteUrl" debe ser una URL válida.',]
  },
  repoUrl:{
    type: String,
    required: true,
    match: [
      /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
      'El campo "siteUrl" debe ser una URL válida.',]
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
