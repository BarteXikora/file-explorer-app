import { render, screen } from '../../../test-utils'
import Folder from './Folder'

describe('Folder component', () => {

    test('renders correctly', () => {
        render(<Folder name='folder name' />)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements).toHaveLength(2)
    })

    test('displays star', () => {
        render(<Folder name='folder name' star={true} />)
        const starElement = screen.getByAltText('Oznaczone gwiazdką')
        expect(starElement).toBeInTheDocument()
    })

})