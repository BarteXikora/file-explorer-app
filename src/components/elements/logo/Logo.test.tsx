import { render, screen } from '../../../test-utils'
import Logo from './Logo'

describe('Logo component', () => {

    test('renders correctly', () => {
        render(<Logo />)

        const logoElement = screen.getByRole('link')
        const imgElement = screen.getByRole('img')

        expect(logoElement).toBeInTheDocument()
        expect(imgElement).toBeInTheDocument()
    })

})