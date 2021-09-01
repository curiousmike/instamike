import { Container } from './styles'
import { MenuItem } from '@material-ui/core';

function UserQuickActionMenu() {
	return (
		<Container>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Details</MenuItem>
		</Container>
	)
}

export default UserQuickActionMenu;
