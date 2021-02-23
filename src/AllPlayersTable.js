import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function AllPlayersTable() {
  const fetchAllPlayersQuery = useQuery("allPlayers", fetchStats);

  if (fetchAllPlayersQuery.isLoading) {
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
        {fetchAllPlayersQuery.data.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </tbody>
    </table>
  );
}

function Player({ player }) {
  const [goals, setGoals] = useState(player.goals);

  const handleBlur = async () => {
    await fetch("/api/players/" + player.id, {
      method: "POST",
      body: JSON.stringify({ ...player, goals }),
    });
  };

  return (
    <tr>
      <td>
        <Link to={`/player/${player.id}`}>{player.player_name}</Link>
      </td>
      <td>
        <input
          onBlur={handleBlur}
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
      </td>
    </tr>
  );
}

async function fetchStats() {
  const res = await fetch("/api/getAllPlayers");
  return res.json();
}
