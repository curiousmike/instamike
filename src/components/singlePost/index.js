import { Container } from './styles'
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostActionBar from './components/singlePostActionBar';
import SinglePostDetails from './components/singlePostDetails';
import SinglePostComments from './components/singlePostComments';
import SinglePostDateFooter from './components/singlePostDateFooter';

function SinglePost({ imgSrc }) {
	return (
		<Container>
			<SinglePostHeader />
			<SinglePostImage imgSrc={imgSrc}/>
			<SinglePostActionBar />
			<SinglePostDetails />
			<SinglePostComments />
			<SinglePostDateFooter />
		</Container>
	)
}

export default SinglePost;
