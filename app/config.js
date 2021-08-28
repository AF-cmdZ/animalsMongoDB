//  Config is the only place that accesses 'dotenv'
import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3001,
    db: process.env.DB_CLIENT_URL,
};

