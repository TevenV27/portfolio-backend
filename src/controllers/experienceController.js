import Experience from '../models/Experience.js';


export const getExperience = async (req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching experiences' });
    }
}

export const addExperience = async (req, res) => {
    try {
        const { title, description, duration, technologies } = req.body;
        const experience = new Experience({
            title,
            description,
            duration,
            technologies,
        });
        await experience.save();
        res.status(201).json({ message: 'Experience added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding project' });
    }
}

export const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, duration, technologies } = req.body;
        const experience = await Experience.findByIdAndUpdate(id, {
            title,
            description,
            duration,
            technologies,
        }, { new: true });
        res.json(experience);
    } catch (error) {
        res.status(500).json({ error: 'Error updating project' });
    }
}

export const delExperience = async (req, res) => {
    try {
        const { id } = req.params;
        await Experience.findByIdAndDelete(id);
        res.status(200).json({message: 'Experience deleted successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Error deleting experience' });
    }
}