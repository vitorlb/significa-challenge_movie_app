import { NextResponse } from "next/server";
export async function GET(request: Request) {

    const url = 'https://api.themoviedb.org/3/authentication';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGJmMGIxNWZjZGYwYzg5OTc0YWViZWRmNzY2NzdiMCIsInN1YiI6IjY2NjcwYjkzY2Y3NjZjZjY1NjE1ZDA0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReMOX3XT76KOWgNTuKyP4DQXLV9_NYbeFc86c7T0Dhk'
      }
    };
    
    const data = await fetch(url, options)
      .then((res:any) => res.json())
      .then((json:any) => json)
      .catch((err:any) => 'error:' + err); 

    return Response.json(data)
}
