import { render, screen } from '../../../test-utils'
import user from '@testing-library/user-event'
import Checkbox from './Checkbox'

describe('Checkbox component', () => {

    test('renders correctly', () => {
        render(<Checkbox isChecked={false} setIsChecked={() => { }} label='label text' />)

        expect(screen.getByText('label text')).toBeInTheDocument()
        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    test('click changes state', async () => {
        user.setup()
        const setStateMock = jest.fn()

        render(<Checkbox isChecked={false} setIsChecked={setStateMock} />)
        const checkboxElement = screen.getByRole('checkbox')

        await user.click(checkboxElement)

        expect(setStateMock).toBeCalled()
    })

})