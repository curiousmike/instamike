import {useState} from 'react';
import { Container, FollowTitle} from './styles'
import {List, ListItem, ListItemText, ListItemAvatar, 
    Avatar, IconButton, ListItemSecondaryAction,Tooltip, Menu, MenuItem } from '@material-ui/core';

import IconVert from '@material-ui/icons/MoreVert';

function FollowView({usersData, user, onSelectUser, followers}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const dense = false;
    const secondary = false;
    let users;
    if (followers) {
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

    const stopFollowing = (index, user) => {
        alert('broke - also last user passed - closure issue? ' + user.name);
        handleMenuClose();
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
	return (
        <Container>
            <FollowTitle>{ followers ? 'Followers' : 'Following'}</FollowTitle>
            <List dense = {dense} style = {{width: '100%'}}>
                { users.map( (user, index)=>(
                    <ListItem onClick = {()=>onSelectUser(user)} key = {index}>
                        <ListItemAvatar>
                            <Avatar alt = {user.name} src = {user.avatar}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user?.name}
                            secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="home" onClick = {(e)=>handleMenuOpen(e)}>
                                <IconVert />
                            </IconButton>
                            <Menu
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={()=>stopFollowing(index, user)}>Stop following {user.name}</MenuItem>
                            </Menu>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Container>
	)
}

export default FollowView;
