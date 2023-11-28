import exp from "constants";
import mongoose from "mongoose";

const playersDataSchema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  sport: {
    type: String
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
});

console.log("Below are models");
console.log(mongoose.models);
console.log("above are models");

const PlayersDataModel =
  mongoose.models?.PlayersData ||
  mongoose.model("PlayersData", playersDataSchema);

export default PlayersDataModel;
