import { render, screen } from '../../../test-utils'
import SearchInput from './SearchInput'

describe('Search input', () => {

    test('renders correctly', () => {
        render(<SearchInput />)
        const inputElement = screen.getByRole('textbox')
        const searchButtonElement = screen.getByRole('submit')
        const mobileButtonElement = screen.getByRole('button')

        expect(inputElement).toBeInTheDocument()
        expect(searchButtonElement).toBeInTheDocument()
        expect(mobileButtonElement).toBeInTheDocument()
    })

})