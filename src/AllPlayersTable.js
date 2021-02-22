import React, {useEffect, useState} from "react";

export default function AllPlayersTable() {
  const [loading, setLoading]  = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const players = await fetchStats();
    setPlayers(players);
    setLoading(false);
  }, [])

  if (loading) {
    return "...laster";
  }

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Goals</th>
      </tr>
      </thead>
      <tbody>
      {players.map(player => (
        <tr>
          <a href={`/player/${player.id}`}>{player.player_name}</a>
          <td>{player.goals}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

async function fetchStats() {
  const res = await fetch("/api/getAllPlayers");
  return res.json();
}