import fetch from "node-fetch";

export default async (request, response) => {
  if (request.method === "GET") {
    const res = await fetch(
      "https://3hg93n5vqg.execute-api.eu-north-1.amazonaws.com/test/league-players"
    );
    const data = await res.json();

    return response.send(data);
  }
  if (request.method === "POST") {
    const res = await fetch(
      "https://3hg93n5vqg.execute-api.eu-north-1.amazonaws.com/test/league-players"
    );
    const data = await res.json();

    const body = request.body;
    console.log(body);

    return data.map(d => {
      if (d.id === body.id) {
        return body;
      } else {
        return d;
      }
    })
  }
};
