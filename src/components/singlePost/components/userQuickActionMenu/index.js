import { Container } from './styles'
import { MenuItem } from '@material-ui/core';

function UserQuickActionMenu({onFollow, onHide}) {
	return (
		<Container>
            {onFollow && <MenuItem onClick={onFollow}>Follow</MenuItem>}
            {onHide && <MenuItem onClick={onHide}>Hide</MenuItem>}
		</Container>
	)
}

export default UserQuickActionMenu;
