import Project from '../models/Project.js';

// Obtener todos los proyectos
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

// Agregar un nuevo proyecto
export const addProject = async (req, res) => {
  try {
    const { title, description, technologies, image } = req.body;
    const project = new Project({
      title,
      description,
      technologies,
      image,
    });
    await project.save();
    res.status(201).json({ message: 'Project added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding project' });
  }
};

export const updateProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, technologies, image } = req.body;
        const project = await Project.findByIdAndUpdate(id, { title, description, technologies, image }, { new: true });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error updating project' });
    }
};


// Eliminar un proyecto por su id
export const delProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting project' });
    }
};
