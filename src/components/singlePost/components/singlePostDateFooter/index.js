import { Container, NumberOfLikes, PosterName} from './styles'
import { formatDate } from '../../../../utils/utils';
// import Icon from '@material-ui/core/Icon';

function singlePostDateFooter({post}) {
	return (
		<Container>
            {formatDate(post.timeStamp)}
		</Container>
	)
}
export default singlePostDateFooter;
