import { Container} from './styles'
import { formatDate } from '../../../../utils/utils';
// import Icon from '@mui/core/Icon';
import {getTimeToShow} from '../../../../utils/utils';

function singlePostDateFooter({post}) {
	const timeToShow = getTimeToShow(post.timeStamp);

	return (
		<Container>
            {timeToShow}
		</Container>
	)
}
export default singlePostDateFooter;
