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
    baseURL: process.env.BETTER_AUTH_URL, 
    emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders: {
        google: { 
           prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
});