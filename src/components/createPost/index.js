import { useContext } from 'react';
import { StoreContext } from './../../store';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/icons-material/SmartButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { Container, UploadContainer, UploadButton, CenterItem, ButtonContainer} from './styles'

function CreatePost({onClose, onSave}) {
	const myContext = useContext(StoreContext);
    const [imageData, setImageData] = useState(null);
    const [imageDescription, setImageDescription] = useState('');
    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        // console.log('file = ', file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // reader.addEventListener('progress', (event) => {
        //     if (event.loaded && event.total) {
        //       const percent = (event.loaded / event.total) * 100;
        //       console.log(`Progress: ${Math.round(percent)}`);
        //     }
        //   });
        reader.onloadend = () =>  {
            setImageData(reader.result);
        }
    }

    const doSave = () => {
        const newPost = {
            description: imageDescription,
            likes: [],
            comments: [],
            image: imageData,
        }
        onSave (newPost);
    }
	return (
		<Container>
            Create Post
            <UploadContainer>
                {!imageData && 
                    <div>
                        <UploadButton>
                            <input style={{display:"none"}} accept="image/*" id="icon-button-file" type="file" onChange={handleUploadClick} />
                            <label htmlFor="icon-button-file">
                                <IconButton  color="primary" aria-label="upload picture" component="span">
                                    {/* <Fab style={{color: 'blue', margin: '10px'}} size="large" variant="extended"> */}
                                        <PhotoCamera style={{fontSize: '80px'}}/>
                                    {/* </Fab> */}
                                </IconButton>
                            </label>
                        </UploadButton>
                        <CenterItem>
                            Upload Image
                        </CenterItem>
                    </div>
                }
                {imageData && <img alt='upload here' style={{width: '20vh'}} src={imageData} />}
            </UploadContainer>
            <TextField fullWidth required id="description" multiline maxRows={4} label="Description" defaultValue={imageDescription} onChange={(e)=>setImageDescription(e.target.value)}/>
            <ButtonContainer>
                <Button variant = "outlined" size="small" onClick={()=>onClose()}> Cancel</Button>
                <Button variant = "outlined" size="small" onClick={()=>doSave()}> Save</Button>
            </ButtonContainer>

		</Container>
	)
}

export default CreatePost;
