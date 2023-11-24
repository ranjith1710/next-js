import connectToDb from "./connect";

const insertQuery = async (client, dbName, collectionName, data) => {
  const db = client.db(dbName);
  let collection = db.collection(collectionName);
  //   const newData = await collection.insertOne({
  //     data
  //   });
  //   console.log(newData);
};

export default insertQuery;
