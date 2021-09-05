import { Container } from './styles'
import SinglePost from '../singlePost';
import mockPostListData from '../../mockData/mockPostListData.js';

function PostList({theRef, selectUser}) {
	return (
		<Container ref={theRef}>
				{ mockPostListData.map( (post, index)=>(
                    <SinglePost
                        key={index}
                        userId={post.userId}
                        postId={post.postId}
                        imgSrc={post.imgSrc}
                        selectUser={selectUser}
                    />
                )) }
		</Container>
	)
}

export default PostList;
