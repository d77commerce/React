const movies = [
    { title: 'Movie 1', description: 'Description of Movie 1' },
    { title: 'Movie 2', description: 'Description of Movie 2' },
    { title: 'Movie 3', description: 'Description of Movie 3' }
];
export default function MovieList  ()  { 
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li>
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
  };

