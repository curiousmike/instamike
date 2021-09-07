import React, {useState} from 'react';
import { Container, ItemContainer, DescriptionContainer, ButtonContainer } from './styles'
import { Avatar, TextField, Button } from '@material-ui/core';

function EditProfile({user, onClose}) {
	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [email, setEmail] = useState(user.email);
	const [phone, setPhone] = useState(user.phone);
	const [password, setPassword] = useState(user.password);
	const [description, setDescription] = useState(user.description);
	const saveProfile = () => {
		const updatedUser = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			password: password,
			description: description
		};
		onClose(updatedUser);
	}
	return (
		<Container>
			    <form noValidate autoComplete="off">
					<ItemContainer>
						<Avatar alt={user.name} src={user.avatar} style={{width: '10vh', height: '10vh'}}/>
					</ItemContainer>
					<ItemContainer>
						<TextField required InputProps={{readOnly: true}} label="User Name" defaultValue={user.name} />
					</ItemContainer>
					<ItemContainer>
						<TextField required id="fname" label="First Name" defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)} />
					</ItemContainer>
					<ItemContainer>
						<TextField required id="lname" label="Last Name" defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)}/>
					</ItemContainer>
					<DescriptionContainer >
						<TextField fullWidth required id="description" multiline maxRows={4} label="Description" defaultValue={description} onChange={(e)=>setDescription(e.target.value)}/>
					</DescriptionContainer>
					<ItemContainer>
						<TextField required id="email" multiline maxRows={4} label="Email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)}/>
					</ItemContainer>
					<ItemContainer>
						<TextField required id="phone" multiline maxRows={4} label="Phone" defaultValue={phone} onChange={(e)=>setPhone(e.target.value)}/>
					</ItemContainer>
					<ItemContainer>
						<TextField required InputProps={{readOnly: true}} id="password" type = "password" multiline maxRows={4} label="Password" defaultValue={password} />
					</ItemContainer>
					<ItemContainer>
						<ButtonContainer>
							<Button variant = "outlined" size="small" onClick={()=>onClose()}> Cancel</Button>
							<Button variant = "outlined" size="small" onClick={()=>saveProfile()}> Save</Button>
						</ButtonContainer>
					</ItemContainer>
				</form>

		</Container>
	)
}

export default EditProfile;
