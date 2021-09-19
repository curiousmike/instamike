import {useState} from 'react';
import { Container, FollowTitle} from './styles'
import {List, ListItem, ListItemText, ListItemAvatar, 
    Avatar,  ListItemSecondaryAction, Button } from '@material-ui/core';
import { updateUser } from '../../../services/userservice';


function FollowView({usersData, user, onSelectUser, followers}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isFollowers = followers;
    const secondary = false;
    let users;
    if (isFollowers) {
        users = user.followers.map((followerName)=>{
            const user = usersData.filter(userData=> {return userData.name === followerName})[0];
            return user;
        });
    } else {
        users = user.following.map((followingUserName)=>{
            const user = usersData.filter(userData=> {return userData.name === followingUserName})[0];
        return user;
        });
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const stopFollowing = (userToRemoveOrBlock) => {
        if (isFollowers) {
            alert ('handle block');
        } else {
            const updatedUser = {...user};
            const followingToKeep = updatedUser.following.filter(followingUserName => {return followingUserName !== userToRemoveOrBlock.name});
            updatedUser.following = followingToKeep;
            updateUser(user, updatedUser);
        }
        handleMenuClose();
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
	return (
        <Container>
            <FollowTitle>{ followers ? 'Followers' : 'Following'}</FollowTitle>
            <List dense = {false} style = {{width: '100%'}}>
                { users.map( (user, index)=>(
                    <ListItem onClick = {()=>onSelectUser(user)} key = {index}>
                        <ListItemAvatar>
                            <Avatar alt = {user.name} src = {user.avatar}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user?.name}
                            secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction >
                            <Button variant = "outlined" size="small" onClick={()=>stopFollowing(user)}>{isFollowers ? 'Block' : 'Stop'} following</Button>
                        </ListItemSecondaryAction>
                    </ListItem>
            ))}
            </List>
        </Container>
	)
}

export default FollowView;
