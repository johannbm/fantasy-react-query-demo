import fetch from "node-fetch";

export default async (request, response) => {
  const { id } = request.query
  const res = await fetch("https://3hg93n5vqg.execute-api.eu-north-1.amazonaws.com/test/player-matches/" + id);
  const data = await res.json()

  return response.send(data);
};