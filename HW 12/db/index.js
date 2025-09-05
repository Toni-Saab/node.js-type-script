import { MongoClient } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URL);
let db;

async function connectToDb() {
    try {
        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}

function getDb() {
    return db;
}

export { connectToDb, getDb };