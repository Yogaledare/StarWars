import {useState} from "react";


const SearchForm = ({fetchCharacterData}) => {
    
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        fetchCharacterData(text);
        setText('');
    }


    return (
        <form onSubmit={handleSubmit} className={'mb-3 d-flex'}>
            <input
                type="text"
                className={'form-control me-2'}
                placeholder="Enter Name"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className={'btn btn-primary'}
            > Search
            </button>
        </form>
    )
}

export default SearchForm; 