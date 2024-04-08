import './App.css';
import SearchForm from "./SearchForm";
import useStarWarsCharacter from "./useStarWarsCharacter";
import BiometricsDisplay from "./BiometricsDisplay";

function App() {

    const {fetchCharacterData, biometrics, error, loading} = useStarWarsCharacter();

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <header className='mt-5 '>
                        <h1 className={'text-center'}>StarWars Character Biometrics</h1>
                        <p>
                            Search on the name of a Star Wars character 
                            (e.g., chewbacca, leia, luke) to retrieve biometrics info on this character. 
                        </p>
                    </header>

                    <SearchForm
                        fetchCharacterData={fetchCharacterData}
                    ></SearchForm>
                    <BiometricsDisplay
                        biometrics={biometrics}
                        error={error}
                        loading={loading}
                    >
                    </BiometricsDisplay>
                </div>
            </div>

        </div>
    );
}

export default App;

