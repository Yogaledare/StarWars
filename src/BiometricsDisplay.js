const BiometricsDisplay = ({biometrics, error, loading}) => {

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <textarea 
                className={'form-control'} 
                id="charData" 
                rows="5" 
                value={biometrics} 
                readOnly
            >
            </textarea>
        </div>
    )
}

export default BiometricsDisplay; 