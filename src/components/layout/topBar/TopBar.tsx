import StyledTopBar from './TopBar.styled'

import Button from '../../ui/button/Button'
import SearchInput from '../../elements/searchInput/SearchInput'
import UserButton from '../../elements/userButton/UserButton'

import iconFilter from '../../../assets/icons/icon-filter.png'
import iconSort from '../../../assets/icons/icon-sort.png'
import iconDisplay from '../../../assets/icons/icon-display.png'
import iconHelp from '../../../assets/icons/icon-help.png'
import iconHamburger from '../../../assets/icons/icon-hamburger.png'
import iconTools from '../../../assets/icons/icon-tools.png'

const TopBar = () => {
    return <StyledTopBar data-testid='top-bar'>
        <Button variant='primary' className='hamburger'>
            <img src={iconHamburger} alt="Otwórz / schowaj menu" />
        </Button>

        <div className='full-width'>
            <SearchInput />

            <Button variant='secondary' className='button-tools' >
                <img src={iconTools} alt="Narzędzia..." />
            </Button>

            <div className="tools-buttons">
                <Button variant='secondary'>
                    <img src={iconFilter} alt="Filtruj pliki" />

                    Filtruj...
                </Button>

                <Button variant='secondary'>
                    <img src={iconSort} alt="Sortuj pliki" />

                    Sortuj...
                </Button>

                <Button variant='secondary'>
                    <img src={iconDisplay} alt="Wyświetl" />

                    Wyświetl...
                </Button>
            </div>
        </div>

        <div>
            <Button variant='secondary' className='button-help'>
                <img src={iconHelp} alt="Pomoc" />

                <span className="help-button-text">Pomoc...</span>
            </Button>

            <UserButton />
        </div>

    </StyledTopBar>
}

export default TopBar