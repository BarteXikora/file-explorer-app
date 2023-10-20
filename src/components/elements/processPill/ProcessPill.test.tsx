import { render, screen } from '../../../test-utils'
import ProcessPill from './ProcessPill'

describe('Process pill component', () => {

    test('renders corectly', () => {
        render(<ProcessPill />)
        const textElement = screen.getByText('Wszystko aktualne')
        const parentElement = textElement.parentElement as HTMLElement
        const imageElement = screen.getByRole('img')

        expect(textElement).toBeInTheDocument()
        expect(parentElement).toBeInTheDocument()
        expect(imageElement).toBeInTheDocument()
    })

})