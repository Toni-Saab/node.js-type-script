// Файл: app.js
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Category from './models/Category.js';
import Product from './models/Product.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Successfully connected to MongoDB!');

        app.post('/categories', async (req, res) => {
            try {
                const category = new Category(req.body);
                await category.save();
                res.status(201).json(category);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        app.post('/products', async (req, res) => {
            try {
                const product = new Product(req.body);
                await product.save();
                res.status(201).json(product);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        app.get('/products', async (req, res) => {
            try {
                const products = await Product.find().populate('category');
                res.status(200).json(products);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
        process.exit(1);
    }
};

startServer();