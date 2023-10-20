import { render, screen } from '../../../test-utils'
import ContentTools from './ContentTools'

describe('Content tools component', () => {

    test('renders correctly', () => {
        render(<ContentTools />)

        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
        expect(screen.getByRole('checkbox', { name: 'Zaznacz wszystko' }))
            .toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Narzędzia' })).toBeInTheDocument()
        expect(screen.getAllByRole('button')).toHaveLength(11)
    })

})