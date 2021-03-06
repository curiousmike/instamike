import { Container } from './styles'
import { MenuItem } from '@mui/material';

function UserQuickActionMenu({onFollow, onHide, onDelete}) {
	return (
		<Container>
            {onFollow && <MenuItem onClick={onFollow}>Follow</MenuItem>}
            {onHide && <MenuItem onClick={onHide}>Hide</MenuItem>}
			{onDelete && <MenuItem onClick={onDelete}>Delete</MenuItem>}
		</Container>
	)
}

export default UserQuickActionMenu;
