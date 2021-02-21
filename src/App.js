import './App.css';
import {useEffect, useState} from "react";



export default function App() {
  const [loading, setLoading]  = useState(false);
  const [data, setData] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const data = await fetchStats();
    setData(data);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {data.map(d => {
          <div>{d}</div>
        })}
      </header>
    </div>
  );
}

const API_URL = "https://3hg93n5vqg.execute-api.eu-north-1.amazonaws.com/test/league-players";
async function fetchStats() {
  const res = await fetch(API_URL);
  console.log(res);
  return res.json();
}
