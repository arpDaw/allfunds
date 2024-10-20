import { MongoClient, ServerApiVersion } from 'mongodb';
import { connectionString } from '../secret.js';

// Create 1 instance of Mongo client connected to our MongoDB database
export const client = new MongoClient(connectionString, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
