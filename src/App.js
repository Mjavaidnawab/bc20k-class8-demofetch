import React , { useEffect } from 'react';
import { useState } from 'react';

import './App.css';

function App() {
  let data = {title: "Waiting for Data"};
  const [todo, setTodo] = useState({data});
  const [isData, setData ] =useState(false);
  const [isFetching, setFetching] =useState(false);

  useEffect(  ()=>{
async function fetchData(){
  setData(true); // added after surge deploy error
  setFetching(true); //when it start the fetching data
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log("The response is : ", response);

  let data2 = await response.json();
  setTodo(data2);
  setFetching(false); //once it done the fetching data
  //console.log("The data is : ", data);

}
fetchData();
 
  
},[isData]);if(isFetching){
  return <div>Data Loading ....</div>
}

  return (
    <div >
     
     <h1>PIAIC Boot Camp Class 8 PIAIC : Get Data in JavaScript and React Fetch API</h1>
     <h2>Student : Muhammad Javaid Nawab </h2>
  <span>Title: {todo.title}</span>
    </div>
  );
}

export default App;
