import { useParams } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
  { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Comedy", "Family"] },
  { id: 3, title: "Pitch Perfect", time: 112, genres: ["Comedy", "Music", "Romance"] },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, idx) => (
        <span key={idx}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;
