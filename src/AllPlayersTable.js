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
          <tr>
            <Link to={`/player/${player.id}`}>{player.player_name}</Link>
            <td>{player.goals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

async function fetchStats() {
  const res = await fetch("/api/getAllPlayers");
  return res.json();
}
