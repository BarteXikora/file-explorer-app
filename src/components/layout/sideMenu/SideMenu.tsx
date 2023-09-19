import StyledSideMenu from './SideMenu.styles'
import logo from '../../../assets/img/img-logo.png'

const SideMenu = () => {
    return <StyledSideMenu>
        <img src={logo} alt="logo multishare" className='logo' />
    </StyledSideMenu>
}

export default SideMenu