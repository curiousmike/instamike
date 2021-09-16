import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList({theRef, selectUser, isProfile, postData}) {
	const myContext = useContext(StoreContext);
    const postsToUser = postData ? postData : myContext.posts; // whether viewing your FEED or viewing a single users posts
	return (
		<Container ref={theRef} style={isProfile ? {height:'65vh'}: {height:'80vh'}}>
				{ postsToUser && postsToUser.map( (post, index)=>(
                    <SinglePost
                        usersData={myContext.users}
                        key={index}
                        post={post}
                        selectUser={selectUser}
                    />
                )) }
		</Container>
	)
}

export default PostList;
