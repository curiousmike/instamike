import { useContext } from 'react';
import { StoreContext } from './../../store';
import { Button, TextField, CircularProgress } from '@mui/material';
import { useState } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { Container, UploadContainer, UploadButton, CenterItem, ButtonContainer, ProgressContainer } from './styles';
const ONE_MEGABYTE = 1014 * 1024;
const MAX_IMAGE_SIZE = 5 * ONE_MEGABYTE;
function CreatePost({ onClose, onSave }) {
  const myContext = useContext(StoreContext);
  const [imageData, setImageData] = useState(null);
  const [imageDescription, setImageDescription] = useState('');
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
    const [fileTooBig, setFileTooBig] = useState(0);
  const handleUploadClick = (e) => {
    const file = e.target.files[0];
    if (file.size > MAX_IMAGE_SIZE) {
      console.log('file size = ', file.size);
      console.log('file size too big = ', file.size / ONE_MEGABYTE);
    }
    const reader = new FileReader();
    setUploadInProgress(true);
    reader.onprogress = (data) => {
      if (data.loaded && data.total) {
        console.log('uploadProgress = ', parseInt((data.loaded / data.total) * 100));
        setUploadProgress(parseInt((data.loaded / data.total) * 100, 10));
      }
    };
    reader.onloadend = (data) => {
      console.log('onloadend data = ', data);
      setImageData(reader.result);
      setUploadInProgress(false);
    };
    reader.readAsDataURL(file);
  };

  const doSave = () => {
    const newPost = {
      description: imageDescription,
      likes: [],
      comments: [],
      image: imageData,
    };
    onSave(newPost);
  };
  return (
    <Container>
      Create Post
      <UploadContainer>
        {!imageData && !uploadInProgress && (
          <div>
            <UploadButton>
              <input
                style={{ display: 'none' }}
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleUploadClick}
              />
              <label htmlFor="icon-button-file">
                <PhotoCamera style={{ fontSize: '80px' }} />
              </label>
            </UploadButton>
            <CenterItem>Upload Image</CenterItem>
          </div>
        )}
        {uploadInProgress && (
          <ProgressContainer>
            <CircularProgress variant="determinate" value={uploadProgress} />
          </ProgressContainer>
        )}
        {imageData && <img alt="upload here" style={{ width: '20vh', margin: '16px' }} src={imageData} />}
      </UploadContainer>
      <TextField
        fullWidth
        required
        id="description"
        multiline
        maxRows={4}
        label="Description"
        defaultValue={imageDescription}
        onChange={(e) => setImageDescription(e.target.value)}
      />
      <ButtonContainer>
        <Button variant="outlined" size="small" onClick={() => onClose()}>
          {' '}
          Cancel
        </Button>
        <Button variant="outlined" size="small" onClick={() => doSave()}>
          {' '}
          Save
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default CreatePost;
