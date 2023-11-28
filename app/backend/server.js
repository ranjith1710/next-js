const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const PORT = 3000; // or any other port you prefer

app.use(cors());

const URI = 'mongodb://localhost:27017/abdul';

// MongoDB connection logic goes here
mongoose.connect(URI);

//My Schema 
const playersScheme = new mongoose.Schema({
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
})

const PlayersModel = mongoose.model('playersdatas',playersScheme);

// Sample route to fetch data
app.get('/abdul/playersdatas',async (req, res) => {
  try{
    const data = await PlayersModel.find();
    res.json(data);
  } catch (err){
    res.status(500).json({err:'ISE'});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
