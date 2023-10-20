import { render, screen } from '../../../../test-utils'
import CollapsePathButton from './CollapsePathButton'

const folders = ['f1', 'f2', 'f3', 'long name of a folder']

describe('Collapse path button component', () => {

    test('renders correctly', () => {
        render(<CollapsePathButton
            content={folders}
            isPathCollapsed={false}
            maxFolderNameLength={100}
        />)

        const buttonElement =
            screen.getByRole('button', { name: 'Wyświetl ścieżkę' })

        expect(buttonElement).toBeInTheDocument()
    })

    test('renders buttons', () => {
        render(<CollapsePathButton
            content={folders}
            isPathCollapsed={false}
            maxFolderNameLength={100}
        />)

        const buttonElements = screen.getAllByRole('button')

        buttonElements.filter((button, n) => n !== 0).forEach((button, n) => {
            expect(button).toHaveTextContent(folders[n])
        })
    })

})