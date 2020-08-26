import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
// const friendName =[{name:"sakib", age: '22'},{name:'rakib', age:'25'},{name:"kashem",age:'27'},{name:'hashem',age: '22'},{name:'Ankon',age:'10'}];
const [users,setUser] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUser(data))
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
        <TotalMovies></TotalMovies>
        {
         users.map(user => <Friend name={user.name} key={user.id}></Friend>)
        }
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count,setCount]=useState(0);

  return (
    <div>
      <button onClick={() =>setCount(count+1)}>Add Movie </button>
      <h3>Numbers of movie: {count}</h3>
      <TotalMovies movies={count}></TotalMovies>
    </div>
  )
}
function TotalMovies(props){
  return (
    <div>
       <h4>total Movie: {props.movies}</h4>
  
    </div>
  )
}
function Friend(props){
  
  const friendStyle={
    backgroundColor: 'grey',
    borderRadius: '10px',
    width: '350px',
    height: '250px',
    margin: '5px',
    
  }
  return <div style={friendStyle}>
      <h3>Name: {props.name}</h3>
      <h5>Age:</h5>
    </div>
  
}

export default App;
