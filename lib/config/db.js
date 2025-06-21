import mongoose from 'mongoose';

const ConnectDB = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog-app');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

export default ConnectDB;