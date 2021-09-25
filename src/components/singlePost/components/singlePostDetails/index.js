import {useState} from 'react';
import { Container, NumberOfLikes, InnerCommentContainer, PosterName, DescriptionContainer} from './styles'
import LikesDialog from '../likesDialog';

function SinglePostDetails({user, post, onSelectUser}) {
  const [showLikes, setShowLikes] = useState(false);

  return (
    <Container>
      <LikesDialog
        onClose={() => setShowLikes(false)}
        open={showLikes}
        post={post}
        onSelectUser={(user) => alert("selected", user.name)}
      />
      <NumberOfLikes onClick={() => setShowLikes(true)}>
        {post.likes.length} likes
      </NumberOfLikes>
      <InnerCommentContainer>
        <PosterName onClick={() => onSelectUser(user)}>{user.name}</PosterName>
        <DescriptionContainer>{post.description || ""}</DescriptionContainer>
      </InnerCommentContainer>
    </Container>
  );
}
export default SinglePostDetails;
