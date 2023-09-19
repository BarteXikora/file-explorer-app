import StyledSideMenu from './SideMenu.styles'
import logo from '../../../assets/img/img-logo.png'

import Button from '../../elements/Button'

import icon from '../../../assets/icons/icon-folder.png'

const SideMenu = () => {
    return <StyledSideMenu>
        <img src={logo} alt="logo multishare" className='logo' />

        <Button>
            <img src={icon} alt="" />

            Wszystkie pliki
        </Button>
    </StyledSideMenu>
}

export default SideMenu