import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [] }); // initialize genres array

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(`http://localhost:4000/movies/${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title || "Loading..."}</h1>
        {movie.time && <p>{movie.time}</p>}
        {movie.genres.map((genre, idx) => (
          <span key={idx}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
