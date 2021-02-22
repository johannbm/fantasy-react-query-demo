import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Player() {
  let { id } = useParams();

  const [loading, setLoading]  = useState(false);
  const [matches, setMatches] = useState([]);

  useEffect(async () => {
    setLoading(true);
    const player = await fetchPlayer(id);
    setMatches(player);
    setLoading(false);
  }, [])

  if (loading) {
    return "...laster";
  }

  return (
    <table style={{ borderSpacing: "0.5rem" }}>
      <thead>
      <tr>
        <th style={{textAlign: "left", paddingRight: "2rem"}}>Kamp</th>
        <th>xG</th>
        <th>Goals</th>
        <th>xA</th>
        <th>Assist</th>
      </tr>
      </thead>
      <tbody>
      {matches.map(match => (
        <tr>
          <td style={{textAlign: "left"}}>{match.h_team}({match.h_goals}) - {match.a_team}({match.a_goals})</td>
          <td>{Number(match.xG).toFixed(2)}</td>
          <td>{match.goals}</td>
          <td>{Number(match.xA).toFixed(2)}</td>
          <td>{match.assists}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

async function fetchPlayer(id) {
  const res = await fetch("/api/players/"+id);
  return res.json();
}