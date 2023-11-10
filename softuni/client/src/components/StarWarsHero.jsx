import { useParams } from 'react-router-dom';
import { useEffect ,useState} from "react"

export default function StarWarsHero () {
    const { id } = useParams();
    const [Data, setData] = useState({});
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }

                return res.json();
            })
            .then(setData)
            .catch((err) => {
                navigate('/StarWarsList');
            });
    }, [id]);
    return (
        
       
            <div  className="order">
            <h2>{Data.name}</h2>
            <p>Height: {Data.height}</p>
            <p>Mass: {Data.mass}</p>
            <p>Hair: {Data.hair_color}</p>
            <h2>Birth year: {Data.birth_year}</h2>
            </div>
    
    );
 }

