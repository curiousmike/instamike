import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Button, TextField } from '@material-ui/core';
import {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { doesUserExist, addNewUser } from '../../services/userservice';

import { Container, UploadContainer, UploadButton, CenterItem, ButtonContainer} from './styles'

function CreateUser({onClose}) {
	const myContext = useContext(StoreContext);
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        console.log('file = ', file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // reader.addEventListener('progress', (event) => {
        //     if (event.loaded && event.total) {
        //       const percent = (event.loaded / event.total) * 100;
        //       console.log(`Progress: ${Math.round(percent)}`);
        //     }
        //   });
        reader.onloadend = () =>  {
            setAvatar(reader.result);
        }
    }
    const saveUser = async () => {
        const newUser = {
            name: name,
            firstName: firstName,
            lastName: lastName,
            description: description,
            email: email,
            phone: phone,
            password: password,
            avatar: avatar,
            posts: [],
            followers: [],
            following: [],
        }
        // onSave(newUser);
        console.log('save user = ', newUser);
        const userExists = await (doesUserExist(newUser.name));
        if (!userExists) {
        if (addNewUser (newUser)) {
            console.log('user successfully added');
        } else {
            console.log('error adding new user');
        };
        } else {
        console.log('new user not added');
        }

    }
	return (
		<Container>
            Create USER
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
                    Upload Image - Limit 5MB
                </CenterItem>
                <img alt={'avatar'} style={{width: '20vh'}} src={avatar} />
            </UploadContainer>
            <TextField fullWidth required id="name" multiline maxRows={4} label="Name" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField required id="firstName" multiline label="First Name" defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <TextField required id="lastName" multiline label="Last Name" defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <TextField required id="description" multiline label="Description" defaultValue={description} onChange={(e)=>setDescription(e.target.value)}/>
            <TextField required id="email" multiline label="Email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField required id="phone" multiline label="Phone" defaultValue={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <TextField required id="password" multiline label="Password" defaultValue={password} onChange={(e)=>setPassword(e.target.value)}/>
            <ButtonContainer>
                <Button variant = "outlined" size="small" onClick={()=>onClose()}> Cancel</Button>
                <Button variant = "outlined" size="small" onClick={()=>saveUser()}> Save</Button>
            </ButtonContainer>

		</Container>
	)
}

export default CreateUser;
