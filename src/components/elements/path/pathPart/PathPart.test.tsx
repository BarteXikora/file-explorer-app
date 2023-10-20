import { render, screen } from '../../../../test-utils'
import PathPart from './PathPart'

import shortName from '../../../../functions/shortName/shortName'

describe('Path part component', () => {

    test('renders correctly', () => {
        render(<PathPart
            path='test path'
            location='test location'
            isLast={false}
            maxFolderNameLength={100}
        />)

        const pathPathElement = screen.getByRole('link')

        expect(pathPathElement).toBeInTheDocument()
        expect(pathPathElement).toHaveTextContent('test path')
        expect(pathPathElement).toHaveAttribute('href', 'test location')
    })

    test('uses max name length correctly', () => {
        render(<PathPart
            path='test path'
            location='test location'
            isLast={false}
            maxFolderNameLength={5}
        />)

        const nameElement = screen.getByRole('link')
        expect(nameElement).toHaveTextContent(shortName('test path', 5))
    })

})