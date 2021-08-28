import { Container, ActionContainer, ItemContainer, CameraContainer } from './styles'
import Icon from '@material-ui/core/Icon';
function Header({ title, disabled, onSubmit }) {
	return (
		<Container>
            <CameraContainer>
			    <Icon>camera</Icon>
            </CameraContainer>
            InstaMike
            <ActionContainer>
                <ItemContainer>
                    <Icon>tv</Icon>
                </ItemContainer>
                <ItemContainer>
                    <Icon>share</Icon>
                </ItemContainer>
            </ActionContainer>

		</Container>
	)
}

export default Header;
