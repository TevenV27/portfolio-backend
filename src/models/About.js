import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    pharase: {
        type:String,
        required:true
    }

})

const About = mongoose.model('About', aboutSchema);

export default About;