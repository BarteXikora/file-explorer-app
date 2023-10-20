import { render, screen } from '../../../test-utils'
import MainBody from './MainBody'

describe('Main body component', () => {

    test('renders children correctly', () => {
        render(<MainBody><h1>test</h1><h2>test</h2></MainBody>)
        const headingElements = screen.getAllByRole('heading')
        expect(headingElements).toHaveLength(2)
    })

})