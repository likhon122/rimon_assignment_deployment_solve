import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 5000,
  mongodb_url:
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/batch4-assignment-2-rimon',
};
