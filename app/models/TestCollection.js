import exp from "constants";
import mongoose from "mongoose";

const testCollectionSchema = mongoose.Schema({
  name: {
    type: String
  }
});

console.log("Below are models");
console.log(mongoose.models);
console.log("above are models");

const TestCollectionModel =
  mongoose.models.TestCollection ||
  mongoose.model("TestCollection", testCollectionSchema);

export default TestCollectionModel;
