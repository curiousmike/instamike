import {useState} from 'react';
import { useContext } from 'react';
import { StoreContext } from './../../store';

import { Container,SearchContainer } from './styles'
import { TextField } from '@material-ui/core';

function Search({}) {
	const myContext = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [userSearchResults, setUserSearchResults] = useState(null);
    const [postSearchResults, setPostSearchResults] = useState(null);
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const keyPress = (event) => {
        if (event.keyCode === 13) {
            setUserSearchResults(myContext.users.filter(object=> {return object.name.toUpperCase().includes(searchTerm.toUpperCase())}));
            setPostSearchResults(myContext.posts.filter(object=> {return object.description.toUpperCase().includes(searchTerm.toUpperCase())}));
            setSearchTerm('');
        }
    }

	return (
		<Container>
            <SearchContainer>
                <TextField id="standard-search" label="Search..." value={searchTerm} type="search" onKeyDown={keyPress} onChange={handleChange}/>
            </SearchContainer>
            { userSearchResults && userSearchResults.map( (user, index)=>(
                <div key={index}> {user.name} </div>
            )) }
            { postSearchResults && postSearchResults.map( (post, index)=>(
                <div key={index}> {post.description} </div>
            )) }

		</Container>
	)
}

export default Search;
