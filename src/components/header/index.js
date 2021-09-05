import { Container, HeaderContainer, ActionContainer, 
    ItemContainer, CameraContainer, AppNameContainer } from './styles'
import { Icon, Tooltip } from '@material-ui/core';
function Header({ title, disabled, onSubmit }) {
	return (
		<Container>
            <HeaderContainer>
                {/* <h3>Media</h3> */}
                <CameraContainer>
                    <Tooltip title="Camera">
                        <Icon>camera</Icon>
                    </Tooltip>
                </CameraContainer>
                <AppNameContainer>InstaMike</AppNameContainer>
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
            </HeaderContainer>
		</Container>
	)
}

export default Header;
