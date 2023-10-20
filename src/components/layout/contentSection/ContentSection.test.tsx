import { render, screen } from '../../../test-utils'
import ContentSection from './ContentSection'

describe('Content section', () => {

    test('renders correctly', () => {
        render(<ContentSection />)
        const mainSection = screen.getByRole('main')
        expect(mainSection).toBeInTheDocument()
    })

})