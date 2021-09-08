import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList({theRef, usersData, postData, selectUser, isProfile}) {
	return (
		<Container ref={theRef} style={isProfile ? {height:'60vh'}: {height:'80vh'}}>
				{ postData.map( (post, index)=>(
                    <SinglePost
                        usersData={usersData}
                        key={index}
                        post={post}
                        selectUser={selectUser}
                    />
                )) }
		</Container>
	)
}

export default PostList;
