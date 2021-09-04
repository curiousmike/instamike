import { Container } from './styles'
import SinglePost from '../singlePost';
import mockPostListData from '../../mockData/mockPostListData.js';

function PostList({theRef}) {
	return (
		<Container ref={theRef}>
				{ mockPostListData.map( (post, index)=>(
                    <SinglePost
                        key={index}
                        userId={post.userId}
                        postId={post.postId}
                        imgSrc={post.imgSrc}
                    />
                )) }
		</Container>
	)
}

export default PostList;
