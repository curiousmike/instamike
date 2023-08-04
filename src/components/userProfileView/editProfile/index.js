import React, {useState} from 'react';
import { Container, ItemContainer, DescriptionContainer, ButtonContainer, UploadButton } from './styles'
import { Avatar, TextField, Button } from '@mui/material';
import IconButton from '@mui/icons-material/SmartButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function EditProfile({ user, onSaveProfile, onClose }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [description, setDescription] = useState(user.description);
  // const [avatar, setAvatar] = useState(user.avatarFileNameSmall);
  // const [avatarRawImage, setAvatarRawImage] = useState(null);

  const handleUploadClick = (e) => {
    console.log('handleUploadClick');
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // setAvatarRawImage(reader.result);
    };
  };

  const saveProfile = () => {
    const updatedUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      //   password: user.password,
      description: description,
      // avatar: avatarRawImage,
    };
    const finalUpdate = { ...user, ...updatedUser };
    onSaveProfile(finalUpdate);
  };
  console.log("editPro  ", user);
  return (
    <Container>
      <form noValidate autoComplete="off">
        <ItemContainer>
          <Avatar
            alt={user.name}
            src={`${user.avatarFileNameSmall}`}
            style={{ width: "10vh", height: "10vh" }}
          />
          <UploadButton>
            <input
              style={{ display: "none" }}
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleUploadClick}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                {/* <Fab style={{color: 'blue', margin: '10px'}} size="large" variant="extended"> */}
                <PhotoCamera style={{ fontSize: "80px" }} />
                {/* </Fab> */}
              </IconButton>
            </label>
          </UploadButton>
        </ItemContainer>
        <ItemContainer>
          <TextField
            required
            InputProps={{ readOnly: true }}
            label="User Name"
            defaultValue={user.name}
          />
        </ItemContainer>
        <ItemContainer>
          <TextField
            required
            id="fname"
            label="First Name"
            defaultValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <TextField
            required
            id="lname"
            label="Last Name"
            defaultValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </ItemContainer>
        <DescriptionContainer>
          <TextField
            fullWidth
            required
            id="description"
            multiline
            maxRows={4}
            label="Description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DescriptionContainer>
        <ItemContainer>
          <TextField
            required
            id="email"
            multiline
            maxRows={4}
            label="Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <TextField
            required
            id="phone"
            multiline
            maxRows={4}
            label="Phone"
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <TextField
            required
            InputProps={{ readOnly: true }}
            id="password"
            type="password"
            multiline
            maxRows={4}
            label="Password"
            defaultValue={user.password}
          />
        </ItemContainer>
        <ItemContainer>
          <ButtonContainer>
            <Button variant="outlined" size="small" onClick={() => onClose()}>
              {" "}
              Cancel
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => saveProfile()}
            >
              {" "}
              Save
            </Button>
          </ButtonContainer>
        </ItemContainer>
      </form>
    </Container>
  );
}

export default EditProfile;
