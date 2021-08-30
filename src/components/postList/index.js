import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList() {
	return (
		<Container>
            <SinglePost imgSrc="flower.jpg"/>
            <SinglePost imgSrc="sunset.jpg"/>
            <SinglePost imgSrc="bee.jpg"/>
            <SinglePost imgSrc="trees.jpg"/>
		</Container>
	)
}

export default PostList;
