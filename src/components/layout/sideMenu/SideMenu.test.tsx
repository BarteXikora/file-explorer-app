import { render, screen } from '../../../test-utils'
import SideMenu from './SideMenu'

describe('Side Menu Component', () => {

    test('renders correctly', () => {
        render(<SideMenu />)
        const sideMenuElement = screen.getByRole('navigation')
        expect(sideMenuElement).toBeInTheDocument()
    })
})