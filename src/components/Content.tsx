import { MovieCard } from "./MovieCard";

import { Header } from "./Header";

import { MovieProps } from "../types/MovieProps";
import { GenreResponseProps } from "../types/GenreRenponse";

import "../styles/content.scss";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <Header category={props.selectedGenre.title} />

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
