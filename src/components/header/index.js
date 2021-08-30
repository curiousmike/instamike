import { Container, ActionContainer, ItemContainer, CameraContainer } from './styles'
import { Icon, Tooltip } from '@material-ui/core';
function Header({ title, disabled, onSubmit }) {
	return (
		<Container>
            <CameraContainer>
                <Tooltip title="Camera">
	    		    <Icon>camera</Icon>
                </Tooltip>
            </CameraContainer>
            InstaMike
            <ActionContainer>
                <ItemContainer>
                    <Tooltip title="Go Live">
                        <Icon>tv</Icon>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Share">
                        <Icon>share</Icon>
                    </Tooltip>
                </ItemContainer>
            </ActionContainer>

		</Container>
	)
}

export default Header;
