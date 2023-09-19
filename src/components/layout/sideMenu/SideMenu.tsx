import StyledSideMenu from './SideMenu.styles'
import logo from '../../../assets/img/img-logo.png'

import Button from '../../elements/button/Button'
import ProjectSelectButton from '../../elements/projectSelectButton/ProjectSelectButton'
import UsedSpace from '../../elements/usedSpace/UsedSpace'

import iconFolder from '../../../assets/icons/icon-folder.png'
import iconStar from '../../../assets/icons/icon-star.png'
import iconTrash from '../../../assets/icons/icon-trash.png'
import iconManage from '../../../assets/icons/icon-manage-project.png'

const SideMenu = () => {
    return <StyledSideMenu>
        <img src={logo} alt="logo multishare" className='logo' />

        <section className='padding-bottom'>
            <h2>Projekt:</h2>

            <ProjectSelectButton name='Moje pliki' />
        </section>

        <section className='full-height'>
            <h2>Menu:</h2>

            <Button variant='tertiary'>
                <img src={iconFolder} alt="Wszystkie pliki" />

                Wszystkie pliki
            </Button>

            <Button variant='tertiary'>
                <img src={iconStar} alt="Oznaczone" />

                Oznaczone
            </Button>

            <Button variant='tertiary'>
                <img src={iconTrash} alt="Kosz" />

                Kosz
            </Button>
        </section>

        <section className='padding-bottom'>
            <UsedSpace currentValue='8.5 GB' wholeSpace='25 GB' percentage={34} />
        </section>

        <section>
            <Button variant='tertiary'>
                <img src={iconManage} alt="Zarządzaj projektem" />

                Zarządzaj projektem
            </Button>
        </section>
    </StyledSideMenu>
}

export default SideMenu