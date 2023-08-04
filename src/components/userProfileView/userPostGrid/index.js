import { Container, MainImageContainer, ImageContainer } from './styles'
import './userPostGrid.css';

function UserPostGrid({user, posts, onSelectImage}) {
  const finalPosts = posts.filter((post) => {
    return post.name === user.name;
  });
  console.log("userPostGrid = ", posts[0]?.fileNameSmall);
	return (
    <Container>
      <MainImageContainer>
        {finalPosts.map((post, index) => (
          <ImageContainer
            key={index}
            onClick={() => onSelectImage(post, index)}
          >
            <img
              className="ImgClass"
              src={`${post.fileNameSmall}`}
              alt={"the alt"}
              key={index}
              width={"100%"}
              height={"100%"}
            />
          </ImageContainer>
        ))}
      </MainImageContainer>
    </Container>
  );
}

export default UserPostGrid;
