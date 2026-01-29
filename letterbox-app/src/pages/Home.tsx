import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

function HomePage() {
  const [movieQuery, setMovieQuery] = useState("");
  // setCount(count + 1);
  // console.log(`HomePage rendered ${count} times`);

  // directly accessing persisted global state
  const [count, setCount] = usePersistedState<number>("count", 0);

  const movies = [
    {
      id: 1,
      title: "Inception",
      imageUrl: "https://image.url/inception.jpg",
      description: "A mind-bending thriller",
    },
    {
      id: 2,
      title: "The Matrix",
      imageUrl: "https://image.url/matrix.jpg",
      description: "A sci-fi classic",
    },
    {
      id: 3,
      title: "Interstellar",
      imageUrl: "https://image.url/interstellar.jpg",
      description: "A journey through space and time",
    },
    {
      id: 4,
      title: "The Dark Knight",
      imageUrl: "https://image.url/darkknight.jpg",
      description: "A gripping superhero tale",
    },
  ];

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = movieQuery.trim();
    console.log(`Searching for movies with query: ${query}`);
    setMovieQuery(movieQuery);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <button onClick={() => setCount(count + 1)}>
          Increment Render Count
        </button>
        <p>Render Count: {count}</p>
        <input
          className="form-control"
          placeholder="Search for movies..."
          value={movieQuery}
          onChange={(e) => setMovieQuery(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary ms-2">
          Submit
        </button>
      </form>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            {movies.map(
              (movie) =>
                movie.title
                  .toLowerCase()
                  .includes(movieQuery.toLowerCase()) && (
                  <div className="p-3">
                    <MovieCard
                      key={movie.id}
                      imageUrl={movie.imageUrl}
                      title={movie.title}
                      description={movie.description}
                    />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
