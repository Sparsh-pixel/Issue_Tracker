const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Sparsh:rdPKBdLHea1sVQqA@cluster0.ied0vpx.mongodb.net/';

let db;

async function connectToDatabase() {
  try {
    const mongoClient = await new MongoClient(uri).connect();

    console.log(' Successfully connected to MongoDB Atlas!');

    db = mongoClient.db('issueTracker');

  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
    throw error;
  }
}

function getDbConnection() {
  if (!db) {
    throw new Error('MongoDB connection not established. Call connectToDatabase() first.');
  }
  return db;
}

module.exports = { connectToDatabase, getDbConnection };