import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    logo:{
        type: String,
        required: true
    }
})


const Technology = mongoose.model('Technology', technologySchema);

export default Technology;
