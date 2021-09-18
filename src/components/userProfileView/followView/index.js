import { Container} from './styles'
import {List, ListItem, ListItemText, ListItemAvatar, 
    Avatar, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import IconVert from '@material-ui/icons/MoreVert';
function FollowView({usersData, user, onSelectUser, followers}) {
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

	return (
		<Container>
            { followers ? 'Follwers' : 'Following'}
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
