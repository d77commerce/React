import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./StarWarsList.css";

const url = 'https://swapi.dev/api';

const StarWarsList = () => {    
    const [starWarsData, setStarWarsData] = useState([]);
    useEffect(() => {
        fetch(`${url}/people`)
            .then(response => response.json())
            .then(data => {setStarWarsData(data.results)})
    }, []); 

    const handleViewClick = (name) => {
        console.log(`View clicked for ${name}`);
        // Add your logic here for what should happen when the button is clicked
    }

    return (
        <div>
         <h1>Star Wars</h1>
         <div className="starWars-container" >
          
            {starWarsData && starWarsData.map((item, index) => {
                return (
                    
                    <div key={index+1} className="star-wars-card">
                        <Link to={`/StarWarsHero/${index+1}`}>
                        <h2>{item.name}</h2>
                        <p>Height: {item.height}</p>
                        <p>Mass: {item.mass}</p>
                        <p>Hair: {item.hair_color}</p>
                        <h3>Birth year: {item.birth_year}</h3>
                        
                            <button >View</button>
                     </Link>
                    </div>
                    
                )
            })}
         </div>
        </div>
    )
}
export default StarWarsList;