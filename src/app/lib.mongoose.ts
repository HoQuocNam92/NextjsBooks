import { MongoClient } from "mongodb";
const clientPromise: Promise<MongoClient> = new MongoClient(process.env.MONGODB_URI!).connect();
clientPromise.then(client => {
    const db = client.db('User');
    console.log("Ket noi thanh cong ", db);
})
    .catch(err => {
        console.log("Error", err);
    });
