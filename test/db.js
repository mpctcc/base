/*QpifWUDjmgK97bvD
lojamaster
*/

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lojamaster:QpifWUDjmgK97bvD@cluster0.ybww7.mongodb.net/loja_virtual?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });

async function run() {
  try {
     await client.connect();
     const db = client.db("loja_virtual");
     const collection = db.collection('protutos');
     const query = { pruduto:"Martelo" };
     const produtos = await collection.insertOne({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });

     console.log(produtos);
  }finally {
    await client.close();
  }

}

run().catch(console.dir)
/*
client.connect(err => {
  const collection = client.db("loja_virtual").collection("devices");
  // perform actions on the collection object
  client.close();
});


*/
/*const result = async () =>{*/

 /* const uri = "mongodb+srv://aula14:Q8ZMAR8WzxsBGroY@cluster0.ybww7.mongodb.net/Aula1?retryWrites=true&w=majority";*/
 

