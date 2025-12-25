const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = async (cname) => {
  try {
    await client.connect();
    return client.db(dbname).collection(cname);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};