// const express = require("express");

// const app = express();

// app.get("/",(req, res)=>{
//     res.write("App is running");
//     res.write("Hello");
//     res.send();
// })

// app.listen(3000);
// let a = {
//     name: "Omprakash"
// }

// console.log(a.name);

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);
const dbName = "demoDB";

async function showDb (){
    const conn = await client.connect()
    // console.log(conn);
    const db = await client.db(dbName);
    const collection = await db.collection('user');
    const findResult = await collection.find({}).toArray();
    console.log(findResult);

}

showDb()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// console.log(typeof(client));