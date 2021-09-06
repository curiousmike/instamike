import { Container } from './styles'
import { MenuItem } from '@material-ui/core';

function UserQuickActionMenu() {
	return (
		<Container>
            <MenuItem>Follow</MenuItem>
            <MenuItem>Hide</MenuItem>
		</Container>
	)
}

export default UserQuickActionMenu;
