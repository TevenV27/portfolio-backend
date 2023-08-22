import About from '../models/About.js'

export const getAbout = async (req,res) =>{
    try{
        const about = await About.find();
        res.json(about);
    } catch(error){
        res.status(500).json({error: 'Error fetching about'});
    }
}
export const addAbout = async (req, res) =>{
    try{
        const {description, pharase} = req.body;
        const about = new About({description, pharase});
        await about.save();
        res.status(201).json({message: 'About added successfully'});
    } catch(error){
        res.status(500).json({error: 'Error creating about'});
    }
}
export const updateAbout = async (req, res) =>{
    try{
        const {id} = req.params;
        const { description, pharase} = req.body;
        const about = await About.findByIdAndUpdate(id, {description, pharase}, {new: true});
        res.json(about);
    } catch(error){
        res.status(500).json({error: 'Error updating about'});
    }
}

export const delAbout = async (req, res) =>{
    try{
        const {id} = req.params;
        const about = await About.findByIdAndDelete(id);
        res.json(about);
    } catch(error){
        res.status(500).json({error: 'Error deleting about'});
    }
}
