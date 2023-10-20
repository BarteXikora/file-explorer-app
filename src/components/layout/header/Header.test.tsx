import { render, screen } from '../../../test-utils'
import Header from './Header'

describe('Header component', () => {

    test('renders correctly', () => {
        render(<Header />)
        const headerElement = screen.getByRole('banner')
        expect(headerElement).toBeInTheDocument()
    })

})