import { useContext } from 'react';
import { StoreContext } from './../../store';
import { Button, Fab, TextField } from '@material-ui/core';
import {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { Container, UploadContainer, UploadButton, CenterItem, ButtonContainer} from './styles'

function CreatePost({onClose, onSave}) {
	const myContext = useContext(StoreContext);
    const [imageData, setImageData] = useState(null);
    const [imageDescription, setImageDescription] = useState('');
    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () =>  {
            setImageData(reader.result);
        }
    }
	return (
		<Container>
            Create Post
            <UploadContainer>
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
                <img style={{width: '320px'}} src={imageData} />
            </UploadContainer>
            <TextField fullWidth required id="description" multiline maxRows={4} label="Description" defaultValue={imageDescription} onChange={(e)=>setImageDescription(e.target.value)}/>
            <ButtonContainer>
                <Button variant = "outlined" size="small" onClick={()=>onClose()}> Cancel</Button>
                <Button variant = "outlined" size="small" onClick={()=>onSave(imageData, imageDescription)}> Save</Button>
            </ButtonContainer>

		</Container>
	)
}

export default CreatePost;
