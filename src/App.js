
import './App.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

const getData = async () => {
  try {
    const res = await fetch("https://v6.exchangerate-api.com/v6/5f6c169eb629a374b98a6f66/latest/USD")
    if(res.ok) {
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(e) {
    console.log(e)
  }
}

function App() {

  const data = useQuery('valute', getData);

  
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
