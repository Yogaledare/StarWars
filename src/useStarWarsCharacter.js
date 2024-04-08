import {useState} from "react";
import axios from 'axios';

const useStarWarsCharacter = () => {
        
    const [biometrics, setBiometrics] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchCharacterData = async (name) => {

        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`https://www.swapi.tech/api/people/?name=${name}`);
            
            if (response.data && response.data.result.length > 0) {
                const {name, height, mass, gender, hair_color} = response.data.result[0].properties; 
                const formattedBiometrics = `Name: ${name}, Height: ${height} cm, Mass: ${mass} kg, Gender: ${gender}, Hair Color: ${hair_color}`;
                setBiometrics(formattedBiometrics)
            } else {
                setBiometrics('No results found.'); 
            }
        } catch (err) {
            setError('Failed to fetch data. Please check the character name and try again.');
        } finally {
            setLoading(false);
        }
    };

    return {fetchCharacterData, biometrics, error, loading};
}


export default useStarWarsCharacter;