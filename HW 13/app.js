import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Publisher from './models/Publisher.js';
import Magazine from './models/Magazine.js';
import Tag from './models/Tag.js';
import Article from './models/Article.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Successfully connected to MongoDB!');

        app.post('/publishers', async (req, res) => {
            const newPublisher = new Publisher(req.body);
            await newPublisher.save();
            res.status(201).json(newPublisher);
        });

        app.post('/magazines', async (req, res) => {
            const newMagazine = new Magazine(req.body);
            await newMagazine.save();
            res.status(201).json(newMagazine);
        });

        app.post('/tags', async (req, res) => {
            const newTag = new Tag(req.body);
            await newTag.save();
            res.status(201).json(newTag);
        });

        app.post('/articles', async (req, res) => {
            const newArticle = new Article(req.body);
            await newArticle.save();
            res.status(201).json(newArticle);
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