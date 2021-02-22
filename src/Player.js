import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";

export default function Player() {
  let { id } = useParams();

  const fetchPlayerQuery = useQuery(["fetchPlayer", id], () => fetchPlayer(id))

  if (fetchPlayerQuery.isLoading) {
    return "..Laster";
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
      {fetchPlayerQuery.data.map(match => (
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