import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "@/lib/db";

const mongoUrl = process.env.DB_URL || process.env.MONGODB_URI;
if (!mongoUrl) {
  throw new Error(
    "Missing MongoDB connection string. Set DB_URL or MONGODB_URI in .env.local"
  );
}

const client = new MongoClient(mongoUrl, {
  serverSelectionTimeoutMS: 5000,
});
const db = client.db(process.env.DB_NAME || 'AuthDB');

export const auth = betterAuth({
  
    emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    client
  }),
});