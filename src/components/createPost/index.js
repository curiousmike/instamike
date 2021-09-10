import { useContext } from 'react';
import { StoreContext } from './../../store';
import { Button } from '@material-ui/core';
import {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { Container, UploadContainer} from './styles'

function CreatePost() {
	const myContext = useContext(StoreContext);
    const [imageData, setImageData] = useState(null);
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
                <input style={{display:"none"}} accept="image/*" id="icon-button-file" type="file" onChange={handleUploadClick} />
                <label htmlFor="icon-button-file">
                    <IconButton  color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera style={{fontSize: '80px'}}/>
                    </IconButton>
                </label>
            </UploadContainer>
            <img style={{width: '320px'}} src={imageData} />
		</Container>
	)
}

export default CreatePost;
