import movies  from "../assets/movies";

 export default function MovieList1  ()  { 
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.Title}>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
  };