import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import Button from './Button'
import AppTheme from '../../../themes/AppTheme'
import image from '../../../assets/icons/icon-folder.png'

describe('Button', () => {

    test('renders correctly without any props', () => {
        render(<Button></Button>, { wrapper: AppTheme })
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders text inside', () => {
        render(<Button>Test</Button>, { wrapper: AppTheme })
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveTextContent('Test')
    })

    test('renders image inside', () => {
        render(<Button><img src={image} alt="test" /></Button>, { wrapper: AppTheme })
        const imageElement = screen.getByRole('img')
        expect(imageElement).toBeInTheDocument()
    })

    test('renders correctly with variants', () => {
        render(<>
            <Button variant='primary'></Button>
            <Button variant='secondary'></Button>
            <Button variant='tertiary'></Button>
            <Button variant='menu'></Button>

        </>, { wrapper: AppTheme })

        const buttonElement = screen.getAllByRole('button')
        expect(buttonElement).toHaveLength(4)
    })

    test('works with onclick', async () => {
        user.setup()
        const onClickMock = jest.fn()

        render(<Button onClick={onClickMock}></Button>, { wrapper: AppTheme })
        const buttonElement = screen.getByRole('button')

        await user.click(buttonElement)

        expect(onClickMock).toHaveBeenCalled()
    })
})