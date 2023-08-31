import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { username, password } = req.body;
    const secret = process.env.JWT_SECRET;
    console.log("Datos recibidos:", req.body);
    try {
        const user = await User.findOne({ username });
        console.log("Usuario encontrado:", user);
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);


        console.log("Las contraseñas coinciden:", isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });

        res.json({ token, username: user.username });
    } catch (error) {
        console.log("Error en el proceso de login:", error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};
