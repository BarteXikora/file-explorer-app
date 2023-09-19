import StyledSideMenu from './SideMenu.styles'
import logo from '../../../assets/img/img-logo.png'

import ProjectSelectButton from '../../elements/projectSelectButton/ProjectSelectButton'
import Button from '../../elements/button/Button'

import icon from '../../../assets/icons/icon-folder.png'

const SideMenu = () => {
    return <StyledSideMenu>
        <img src={logo} alt="logo multishare" className='logo' />

        <ProjectSelectButton name='Moje pliki' />

        <br /><br />

        <Button>
            <img src={icon} alt="" />

            Wszystkie pliki
        </Button>
    </StyledSideMenu>
}

export default SideMenu