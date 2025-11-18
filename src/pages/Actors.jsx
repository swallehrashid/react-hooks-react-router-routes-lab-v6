const actors = [
  { name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] },
  { name: "Justin Timberlake", movies: ["Trolls", "Friends with Benefits", "The Social Network"] },
  { name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
  { name: "Tom Cruise", movies: ["Jack Reacher: Never Go Back","Mission Impossible 4","War of the Worlds"] },
];

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
