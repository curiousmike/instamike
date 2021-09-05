import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList({theRef, postData, selectUser}) {
	return (
		<Container ref={theRef}>
				{ postData.map( (post, index)=>(
                    <SinglePost
                        key={index}
                        post={post}
                        selectUser={selectUser}
                    />
                )) }
		</Container>
	)
}

export default PostList;
