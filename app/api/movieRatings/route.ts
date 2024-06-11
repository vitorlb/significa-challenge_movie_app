// @ts-nocheck

export async function POST(request: Request) {
  const { movieId } = await request.json();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGJmMGIxNWZjZGYwYzg5OTc0YWViZWRmNzY2NzdiMCIsInN1YiI6IjY2NjcwYjkzY2Y3NjZjZjY1NjE1ZDA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReMOX3XT76KOWgNTuKyP4DQXLV9_NYbeFc86c7T0Dhk'
    }
  };

  const data = await fetch(url, options)
    .then(res => res.json())
    .then(json => json.results)
    .catch(err => console.error('error:' + err));


  return Response.json({ data });
}
