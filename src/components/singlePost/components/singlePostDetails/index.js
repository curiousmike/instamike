import { useState, useContext } from "react";
import { StoreContext } from "../../../../store";
import {
  Container,
  NumberOfLikes,
  InnerCommentContainer,
  PosterName,
  DescriptionContainer,
} from "./styles";
import LikesDialog from "../likesDialog";

function SinglePostDetails({ user, post, onSelectUser }) {
  const myContext = useContext(StoreContext);
  const [showLikes, setShowLikes] = useState(false);
  const showTheLiker = (likerName) => {
    const likerUser = myContext.users.filter(
      (user) => user.name === likerName
    )[0];
    console.log("showTheLiker = ", likerName);
    onSelectUser(likerUser);
  };

  return (
    <Container>
      <LikesDialog
        onClose={() => setShowLikes(false)}
        open={showLikes}
        postOrComment={post}
        onSelectUser={(likerName) => showTheLiker(likerName)}
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
