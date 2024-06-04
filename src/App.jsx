import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1>Movie List Section</h1>
        <div className="boxes">
          {movies.map((movie, index) => {
            return (
              <div key={index} className="movie-container">
                <div className="movie-image">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="movie-detail">
                  <p>Title: {movie.title}</p>
                  <p>Year: {movie.year}</p>
                  <p>Runtime: {movie.runtime}</p>
                  <div className="genres">
                    <div>Genres:</div>
                    <div className="span-container">
                      {movie.genres.map((genre, index) => {
                        return <span key={index}>{genre}</span>;
                      })}
                    </div>
                  </div>
                  <p>IMDB Ratings: {movie.imdbRating}</p>
                  <p>IMDB Votes: {movie.imdbVotes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
