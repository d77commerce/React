import Movie from './Movie';


export default function MovieList(props) {
  return (
    <div>
      <h1>{props.headingText}</h1>
      <ul>
        <li>
          <div className="movie-card">
            <h2 className="movie-title">{props.movies[0].title}</h2>
            <p className="movie-description">{props.movies[0].description}</p>
            <Movie movieData={props.movies[0]} />
          </div>
        </li>
        <li>
          <div className="movie-card">
            <h2 className="movie-title">{props.movies[1].title}</h2>
            <p className="movie-description">{props.movies[1].description}</p>
            <Movie movieData={props.movies[1]} />
          </div>
        </li>
        <li>
          <div className="movie-card">
            <h2 className="movie-title">{props.movies[2].title}</h2>
            <p className="movie-description">{props.movies[2].description}</p>
            <Movie movieData={props.movies[2]} />
          </div>
        </li>
      </ul>
    </div>
  );
}

