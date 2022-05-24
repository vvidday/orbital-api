import dotenv from 'dotenv';
import { TwitterApi } from 'twitter-api-v2';

dotenv.config();

// 
export const client = new TwitterApi(process.env.BEARER);