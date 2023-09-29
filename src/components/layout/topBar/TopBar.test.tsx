import { render, screen } from '../../../test-utils'
import TopBar from './TopBar'

describe('Top Bar Component', () => {

    test('renders correctly', () => {
        render(<TopBar />)
        const topBarElement = screen.getByTestId('top-bar')
        expect(topBarElement).toBeInTheDocument()
    })
})