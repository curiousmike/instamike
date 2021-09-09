import {useState} from 'react';
import { Container,SearchContainer } from './styles'
import { TextField } from '@material-ui/core';

function Search({}) {
    const [searchTerm, setSearchTerm] = useState(null);
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const keyPress = (event) => {
        if (event.keyCode === 13) {
            console.log ('enter pressed; do search = ', searchTerm);
            setSearchTerm('');
        }
    }

	return (
		<Container>
            <SearchContainer>
                <TextField id="standard-search" label="Search..." value={searchTerm} type="search" onKeyDown={keyPress} onChange={handleChange}/>
            </SearchContainer>
		</Container>
	)
}

export default Search;
