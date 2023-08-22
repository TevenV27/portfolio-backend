import Education from '../models/Education.js';

export const getEducation = async (req,res) =>{
    try{
        const education = await Education.find();
        res.status(200).json(education);
    }catch(error){
        res.status(500).json({error: 'Error fetching education'});
    }    
}

export const addEducation = async (req,res) => {
    try{
        const {institute, description, yearInitiated,yearGraduated} = req.body
        const education = new Education({institute, description, yearInitiated,yearGraduated});
        await education.save();
        res.status(201).json({message: 'Education added successfully'});
    }catch(error){
        res.status(500).json({error: 'Error adding education'});
    }
}

export const updateEducation = async (req,res) => {
    try{
        const { id } = req.params;
        const {institute, description, yearInitiated,yearGraduated} = req.body
        const education = await Education.findByIdAndUpdate(id, {institute, description, yearInitiated,yearGraduated}, {new: true});
        res.status(200).json(education);
    }catch(error){
        res.status(500).json({error: 'Error updating education'});
    }
}

export const delEducation = async (req,res) => {
    try{
        const id = req.params.id;
        await Education.findByIdAndDelete(id);
        res.status(200).json({message: 'Education deleted successfully'});
    }catch(error){
        res.status(500).json({error: 'Error deleting education'});
    }
}