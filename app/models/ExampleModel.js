import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

console.log("Data in model");
// console.log(mongoose.models.Example);
// console.log(mongoose.models);
// console.log(mongoose.model("Example"));

export default mongoose.models.Example ||
  mongoose.model("Example", exampleSchema);

// const ExampleModel =
//   mongoose.model("Example") || mongoose.model("Example", exampleSchema);
