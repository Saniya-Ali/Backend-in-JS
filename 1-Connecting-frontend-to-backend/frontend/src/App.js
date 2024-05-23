import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [jokes, setJokes]= useState([])

  useEffect(()=>{
    // axios.get('http://localhost:3000/api/jokes')
    axios.get('/api/jokes') //add proxy in package,json. This will also solvecors error
    .then((response) => {
      setJokes(response.data)//We do not need to convert JSON in axios because it does that by itself
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <>
    <h1>Jokes: {jokes.length}</h1>
    {jokes.map((joke, index)=>(
      <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))}
    </>
  );
}

export default App;
