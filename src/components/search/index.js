import {useState, useEffect} from 'react';
import { useContext } from 'react';
import { StoreContext } from './../../store';
import { Button, TextField } from '@material-ui/core';

import { Container,SearchContainer } from './styles'

function Search({selectUser}) {
	const myContext = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [userSearchResults, setUserSearchResults] = useState(null);
    const [postSearchResults, setPostSearchResults] = useState(null);
    
    useEffect ( () => () => console.log('unmount'), []);

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

    const resetStuff = () => {
        setSearchTerm(null);
        setUserSearchResults(null);
        setPostSearchResults(null);
    }
    const handleSelectUser = (user) => {
        resetStuff();
        selectUser(user); // an actual user
    }

    const handleSelectPost = (post) => {
        resetStuff();
        console.log('post.user = ', post.name); // is "username"  this isnt a user.  confusing.
        //selectUser(post.user);
    }

	return (
		<Container>
            <SearchContainer>
                <TextField id="standard-search" label="Search..." value={searchTerm} type="search" onKeyDown={keyPress} onChange={handleChange}/>
            </SearchContainer>
            <div>Users</div>
            { userSearchResults && userSearchResults.map( (user, index)=>(
                <Button style={{width:'25%'}} variant="outlined" key={index} onClick={() => handleSelectUser(user)}> {user.name} </Button>
            )) }
            <div>Posts</div>
            { postSearchResults && (
                postSearchResults.map( 
                    (post, index)=>(
                        <Button style={{width:'25%'}} variant="outlined" key={index} onClick={()=>handleSelectPost(post)}> 
                            {post.description} 
                        </Button>
                    )
                )) 
            }

		</Container>
	)
}

export default Search;
