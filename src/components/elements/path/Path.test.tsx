import { render, screen } from '../../../test-utils'
import Path from './Path'

describe('Path component', () => {

    test('renders correctly', () => {
        render(<Path />)

        const linkElements = screen.getAllByRole('link')
        expect(linkElements.length).toBeGreaterThan(0)
    })

})