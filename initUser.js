import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './src/models/User.js';
import { connect } from './src/utils/db.js';

dotenv.config();  // <-- Añade esta línea

connect();

const createUser = async () => {
    const password = '@1000145230KSVO'; 
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
        username: 'teven',
        password: hashedPassword
    });

    await user.save();
    console.log('User created successfully!');
    mongoose.connection.close();
};

createUser();
