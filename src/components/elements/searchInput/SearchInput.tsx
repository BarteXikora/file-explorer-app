import { StyledSearchInput, StyledMobileSearchButton } from './SearchInput.styles'
import Button from '../../ui/button/Button'
import iconSearch from '../../../assets/icons/icon-search.png'

const SearchInput = () => {
    return <>
        <StyledSearchInput>
            <input type="text" placeholder='Wpisz szukaną frazę tutaj...' />

            <Button role='submit'>
                <img src={iconSearch} alt="Wyszukaj" />

                <span>Wyszukaj</span>
            </Button>
        </StyledSearchInput>

        <StyledMobileSearchButton>
            <img src={iconSearch} alt="Wyszukaj" />

            <span>Wyszukaj...</span>
        </StyledMobileSearchButton>
    </>
}

export default SearchInput