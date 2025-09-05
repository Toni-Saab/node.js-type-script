import express from 'express';
import { ObjectId } from 'mongodb';
import 'dotenv/config';
import { connectToDb, getDb } from './db/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let db;

async function startServer() {
    try {
        await connectToDb();
        db = getDb();


        app.post('/products', async (req, res) => {
            try {
                const product = req.body;
                const result = await db.collection('products').insertOne(product);
                res.status(201).json(result);
            } catch (error) {
                res.status(500).json({ error: 'Could not create the product.' });
            }
        });

        // 2. Получение всех продуктов
        app.get('/products', async (req, res) => {
            try {
                const products = await db.collection('products').find().toArray();
                res.status(200).json(products);
            } catch (error) {
                res.status(500).json({ error: 'Could not fetch the products.' });
            }
        });


        app.get('/products/:id', async (req, res) => {
            try {
                const productId = new ObjectId(req.params.id);
                const product = await db.collection('products').findOne({ _id: productId });
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json({ error: 'Product not found.' });
                }
            } catch (error) {
                res.status(500).json({ error: 'Could not fetch the product.' });
            }
        });


        app.put('/products/:id', async (req, res) => {
            try {
                const productId = new ObjectId(req.params.id);
                const updatedProduct = req.body;
                const result = await db.collection('products').updateOne({ _id: productId }, { $set: updatedProduct });
                if (result.matchedCount === 0) {
                    res.status(404).json({ error: 'Product not found.' });
                } else {
                    res.status(200).json({ message: 'Product updated successfully.' });
                }
            } catch (error) {
                res.status(500).json({ error: 'Could not update the product.' });
            }
        });


        app.delete('/products/:id', async (req, res) => {
            try {
                const productId = new ObjectId(req.params.id);
                const result = await db.collection('products').deleteOne({ _id: productId });
                if (result.deletedCount === 0) {
                    res.status(404).json({ error: 'Product not found.' });
                } else {
                    res.status(200).json({ message: 'Product deleted successfully.' });
                }
            } catch (error) {
                res.status(500).json({ error: 'Could not delete the product.' });
            }
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Server failed to start:', error);
    }
}

startServer();