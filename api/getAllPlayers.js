import fetch from 'node-fetch';

export default async (request, response) => {
  const res = await fetch("https://3hg93n5vqg.execute-api.eu-north-1.amazonaws.com/test/league-players")
  const data = await res.json()

  return response.send(data);
};