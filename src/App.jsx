/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./App.css";
import movieData from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movieData.map((movie, index) => {
          return (
            <div
              key={index}
              css={css`
                display: flex;
                width: 500px;
                height: fit-content;
                gap: 50px;
                background-color: #ffffff;
                color: black;
                border-radius: 10px;
                padding: 18px 14px 18px 14px;
              `}
            >
              <div className="img-sec">
                <img
                  src={movie.image}
                  alt={movie.title}
                  css={css`
                    width: 102px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 10px;
                  `}
                />
              </div>
              <div className="text-sec">
                <p>Title:{movie.title}</p>
                <p>Year:{movie.year}</p>
                <p>Runtime:{movie.runtime}</p>
                <p>Director:{movie.director}</p>
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  Genres:
                  {movie.genres.map((genre, index) => {
                    return (
                      <div
                        key={index}
                        css={css`
                          background-color: #eaac99;
                          border-radius: 10px;
                          font-size: 16px;
                          padding-left: 10px;
                          padding-right: 10px;
                          margin-left: 10px;
                          margin-top: 5px;
                        `}
                      >
                        {genre}
                      </div>
                    );
                  })}
                </div>
                <p>IMDB Ratings:{movie.imdbRating}</p>
                <p>IMDB Votes:{movie.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
