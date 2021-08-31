import { Container } from './styles'
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostActionBar from './components/singlePostActionBar';
import SinglePostDetails from './components/singlePostDetails';
import SinglePostComments from './components/singlePostComments';
import SinglePostDateFooter from './components/singlePostDateFooter';

function SinglePost({ imgSrc }) {
	const addFavorite = () => {
		console.log('add favorite');
	}
	const addComment = () => {
		console.log('add Comment');
	}
	const doShare = () => {
		console.log('doShare');
	}
	const doBookmark = () => {
		console.log('do bookmark');
	}
	return (
		<Container>
			<SinglePostHeader />
			<SinglePostImage imgSrc={imgSrc}/>
			<SinglePostActionBar 
				addFavorite={()=>addFavorite()}
				addComment={()=>addComment()}
				doShare={()=>doShare()}
				doBookmark={()=>doBookmark()} />
			<SinglePostDetails />
			<SinglePostComments />
			<SinglePostDateFooter />
		</Container>
	)
}

export default SinglePost;
