import StyledTopBar from './TopBar.styled'

import Button from '../../ui/button/Button'
import SearchInput from '../../elements/searchInput/SearchInput'
import UserButton from '../../elements/userButton/UserButton'

import iconFilter from '../../../assets/icons/icon-filter.png'
import iconSort from '../../../assets/icons/icon-sort.png'
import iconDisplay from '../../../assets/icons/icon-display.png'
import iconHelp from '../../../assets/icons/icon-help.png'
import iconHamburger from '../../../assets/icons/icon-hamburger.png'

const TopBar = () => {
    return <StyledTopBar data-testid='top-bar'>
        <div className='full-width'>
            <Button variant='primary' className='hamburger'>
                <img src={iconHamburger} alt="Otwórz / schowaj menu" />
            </Button>

            <SearchInput />

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

        <div>
            <Button variant='secondary'>
                <img src={iconHelp} alt="Pomoc" />

                Pomoc...
            </Button>

            <UserButton />
        </div>

    </StyledTopBar>
}

export default TopBar