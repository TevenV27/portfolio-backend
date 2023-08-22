import Technology from "../models/Technology.js";


export const getTechnology = async (req,res) =>{
    try{
        const technology = await Technology.find();
        res.json(technology)
    }catch(error){
        res.status(500).json({error: 'Error fetching technology'});
    }
}

export const addTechnology = async (req,res) =>{
    try{
        const { name, logo} = req.body;
        const technology = new Technology({
            name,
            logo
        });
        const newTechnology = await technology.save();
        res.json(newTechnology);
    }catch(error){
        res.status(500).json(error);
    }
}
export const updateTechnology = async (req, res) =>{
    try{
        const { id } = req.params;
        const { name, logo} = req.body;
        const technology = await Technology.findByIdAndUpdate(id, {
            name,
            logo
        }, {new: true});
        res.json(technology);
    }catch(error){
        res.status(500).json({error: 'Error updating technology'});
    }
}

export const delTechnology = async (req, res) =>{
    try{
        const { id } = req.params;
        const technology = await Technology.findByIdAndDelete(id);
        res.json(technology);

    }catch(error){
        res.status(500).json({error: 'Error deleting technology'});
    }
}