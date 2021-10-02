import { Container } from './styles';
import { getTimeToShow } from '../../../../utils/utils';

function singlePostDateFooter({ post }) {
  const timeToShow = getTimeToShow(post.timeStamp);

  return <Container>{timeToShow}</Container>;
}
export default singlePostDateFooter;
