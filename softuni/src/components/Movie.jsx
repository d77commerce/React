export default function Movie(props) {
    return (
        <article>
            <h3>{props.movieData.title}</h3>
            <h4 text="text-bolt">{props.movieData.Title}</h4>
            <h4 text="text-bolt">{props.movieData.Year}</h4>
            <p>Description: {props.movieData.Plot}</p>
            <p>Director: {props.movieData.Director}</p>
            <p>Writer: {props.movieData.Writer}</p>
            <p>Release date: {props.movieData.Released}</p>
        </article>)
};