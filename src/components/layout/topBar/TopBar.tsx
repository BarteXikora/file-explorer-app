import StyledTopBar from './TopBar.styled'

import Button from '../../elements/button/Button'

import iconFilter from '../../../assets/icons/icon-filter.png'
import iconSort from '../../../assets/icons/icon-sort.png'
import iconDisplay from '../../../assets/icons/icon-display.png'
import iconHelp from '../../../assets/icons/icon-help.png'

const TopBar = () => {
    return <StyledTopBar>
        <div className='full-width'>
            <div>wyszukaj</div>

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

            <div>konto</div>
        </div>

    </StyledTopBar>
}

export default TopBar