import MovieCard from '../components/MovieCard';

const movies = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action","Adventure","Fantasy"] },
  { id: 2, title: "Trolls", time: 92, genres: ["Animation","Comedy","Family"] },
  { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action","Thriller"] },
];

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </main>
  );
}

export default Home;
