// Drop in Template for MongoDB Connection
import { MongoClient } from 'mongodb';
import config from './config.js';

const client = new MongoClient(config.db);

client.connect().then(() => {
    console.info("MongoDB Client Running");
}).catch(err => {
    console.error("Error starting MondoDB Client", err.message);
    // Cleanly exit port connection after an error, 1 = failure
    process.exit(1);
});

// SIGINT = ctr C
process.on("SIGINT", () => {
    client.close().then(() => {
        console.info("MongoDB Client Disconnected");
        // Clean Exit
        process.exit(0);
    });
});

export default client;