import { MongoClient } from "mongodb";

const connectToDb = async () => {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // return client;
    // client.db("players").collection("playersData").find({})
    const playerDb = client.db("players");
    const playerCollection = playerDb.collection("playersData");
    const data = await playerCollection.find({ name: "Ranjith" }).toArray();

    console.log(data);
    // const newData = await playerCollection.insertOne({
    //   name: "Shanjeev",
    //   team: "Australia"
    // });
    // console.log(newData);
    // console.log(playerCollection);
  } catch (err) {
    console.log(err);
  }
};

export default connectToDb;
