import { Container} from './styles'
import {List, ListItem, ListItemText, ListItemAvatar, 
    Avatar, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconVert from '@material-ui/icons/MoreVert';
import mockUserData from '../../../mockData/mockUserData';
function FollowView({user, onSelectUser, followers}) {
    const dense = false;
    const secondary = false;
    let users;
    console.log('user = ', user);
    if (followers) {
        users = user.followers.map((item)=>{
            const user = mockUserData.filter(userData=> {return userData.id === item})[0];
            return user;
        });
    } else {
        users = user.following.map((item)=>{
            const user = mockUserData.filter(userData=> {return userData.id === item})[0];
        return user;
        });
    }

	return (
		<Container>
            <List dense={dense} style={{width: '100%'}}>
                { users.map( (user, index)=>(
                    <ListItem onClick={()=>onSelectUser(user)} key={index}>
                        <ListItemAvatar>
						<Avatar alt={user.name} src={user.avatar}/>
                        </ListItemAvatar>
                        <ListItemText
                        primary={user?.name}
                        secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <IconVert />
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
          </Container>
	)
}

export default FollowView;
