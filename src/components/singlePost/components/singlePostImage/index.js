import { Container, ImageContainer } from './styles'
import {useState} from 'react';

function SinglePostImage({ imgSrc, onImageClick, isProfile }) {
  const [isWide, setIsWide] = useState(false);
  const maxHeight = isProfile ? '60vh' : '80vh';
  const handleLoad = ({target}) => {
    if (target.offsetWidth >= target.offsetHeight) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
  }

  return (
    <Container>
      <ImageContainer>
        <img
          alt="my alt"
          style={{
            width: isWide ? '90%' : '',
            height: isWide ? '' : maxHeight,
          }}
          src = {imgSrc}
          onClick = {onImageClick}
          onLoad = {(e)=>handleLoad(e)}
        ></img>
      </ImageContainer>
    </Container>
  );
}

export default SinglePostImage;
