import { render, screen } from '../../../test-utils'
import Dropdown from './Dropdown'

describe('Dropdown component', () => {

    test('renders correctly', () => {
        render(<Dropdown
            buttonContent='button text'
            dropdownContent={<h1>dropdown content</h1>}
        />)

        const buttonElement = screen.getByRole('button', { name: 'button text' })
        const contentElement = screen.getByRole('heading', { name: 'dropdown content' })

        expect(buttonElement).toBeInTheDocument()
        expect(contentElement).toBeInTheDocument()
    })

})