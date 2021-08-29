import { Container } from './styles'
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostFooter from './components/singlePostFooter';

function SinglePost({ imgSrc }) {
	return (
		<Container>
			<SinglePostHeader />
			<SinglePostImage imgSrc={imgSrc}/>
			<SinglePostFooter />
		</Container>
	)
}

export default SinglePost;
