import StyledSearchInput from './SearchInput.styles'
import Button from '../../ui/button/Button'
import iconSearch from '../../../assets/icons/icon-search.png'

const SearchInput = () => {
    return <StyledSearchInput>
        <input type="text" placeholder='Wpisz szukaną frazę tutaj...' />

        <Button>
            <img src={iconSearch} alt="Wyszukaj" />

            Wyszukaj
        </Button>
    </StyledSearchInput>
}

export default SearchInput