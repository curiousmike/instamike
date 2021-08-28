import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList() {
	return (
		<Container>
            <SinglePost />
            <SinglePost />
            <SinglePost />
		</Container>
	)
}

export default PostList;
