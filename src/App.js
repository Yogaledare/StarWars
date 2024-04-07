import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from 'axios';
import SearchForm from "./SearchForm"; 

function App() {
    
    
    
    const [characterName, setCharacterName] = useState(''); 
    const [biometrics, setBiometrics] = useState(''); 
    const [error, setError] = useState('');
    const [loading, setLoading] =  useState(false); 
    

    
    const fetchCharacterData = async (name) => {
        setLoading(true); 
        setError(''); 
        
        try {
            const response = await axios.get(`https://www.swapi.tech/api/people/?name=${name}`)

            console.log(response); 
            
            
            
        } catch (err) {
            setError('Failed to fetch data. Please check the character name and try again.');
            setBiometrics('');
        } finally {
            setLoading(false); 
        }
        
        
        
        
        
        
    }
    

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <header className='my-5 '>
                        <h1 className={'text-center'}>StarWars Character Biometrics Fetcher</h1>
                    </header>

                    <SearchForm
                        setBiometrics={console.log("hi")}
                    ></SearchForm>
                </div>
            </div>

        </div>
    );
}

export default App;





{/*<input */}
{/*    type="text"*/}
{/*    value={characterName}*/}
{/*    onChange={(e) => setCharacterName(e.target.value)}*/}
{/*    placeholder={'Enter Name'}*/}
{/*/>*/}


{/*<AddTodoForm*/}
{/*    addTodo={addTodo}*/}
{/*></AddTodoForm>*/}
{/*<TodoList todos={todos} toggleComplete={toggleComplete} removeItem={removeItem}></TodoList>*/}
{/*<ControlPanel*/}
{/*    undoTodo={undoTodo}*/}
{/*    removeAll={removeAll}*/}
{/*></ControlPanel>*/}

