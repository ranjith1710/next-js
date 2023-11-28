'use client'
import { useEffect, useState } from 'react';
// import connectDB from './db/dbConnection';
// import PlayersDataModel from './models/PlayersData';
import axios from 'axios';
// import { error } from 'console';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/abdul/playersdatas').then(response =>{
      setData(response);
    }).catch(error =>{
      console.error('error',error);
    })
  },[]);

  // connectDB().then(()=>(
  //   PlayersDataModel?.find({})?.then((response)=>{
  //     console.log('response',response);
  //   }).catch((err)=>{
  //     console.log('error',err);
  //   })
  // ))

  // console.info('data', data);

  return (
    <div>
      <h1>Inserting Data</h1>
      <p>Check the console for status</p>
    </div>
  );
};

export default Home;