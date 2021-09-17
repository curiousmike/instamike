import { Container } from './styles'
import { MenuItem } from '@material-ui/core';

function UserQuickActionMenu({onFollow, onHide}) {
	return (
		<Container>
            <MenuItem onClick={onFollow}>Follow</MenuItem>
            <MenuItem onClick={onHide}>Hide</MenuItem>
		</Container>
	)
}

export default UserQuickActionMenu;
