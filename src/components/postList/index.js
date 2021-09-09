import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList({theRef, theKey, postData, selectUser, isProfile}) {
	const myContext = useContext(StoreContext);
	return (
		<Container ref={theRef} style={isProfile ? {height:'60vh'}: {height:'80vh'}}>
				{/* { myContext.posts && myContext.posts.map( (post, index)=>( */}
				{ postData && postData.map( (post, index)=>(
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
