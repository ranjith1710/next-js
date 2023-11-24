import connectDB from './db/dbConnection';
// import ExampleModel from './models/ExampleModel';
import TestCollectionModel from './models/TestCollection';

connectDB()

const Home = () => {
 
  // const newExample = new ExampleModel({
  //   name: 'Example Name',
  //   description: 'This is an example description.',
  // });


  // newExample.save().then(res=>console.log(res)).catch(err=>console.log(err));

  // ExampleModel.find({}).then(data=>{
  //   console.log("fetched all data")
  //   console.log(data)
  // }).catch(err=>{
  //   console.log("error in fetching all data")
  //   console.log(err)
  // })

  const newData = new TestCollectionModel({
    name : "Ranjith"
  })
  
newData.save().then(data=>{

  console.log("data inserted successfully")
  console.log(data)
})
 
  

  return (
    <div>
      <h1>Inserting Data</h1>
      <p>Check the console for status</p>
    </div>
  );
};

export default Home;