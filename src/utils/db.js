import mongoose from 'mongoose';

<<<<<<< HEAD
export const async connect = () => {
=======
export const connect = async () => {
>>>>>>> e60731a (Async db)
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    console.log('Connected to the database');
  });
};
