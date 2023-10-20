import { render, screen } from '../../../test-utils'
import UserButton from './UserButton'

import image from '../../../assets/__files/photo0.png'
import icon from '../../../assets/icons/icon-user-account.png'

describe('User button', () => {

    test('renders correctly', () => {
        render(<UserButton />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    test('displays user avatar', () => {
        render(<UserButton userPicture={image} />)
        const imageElement =
            screen.getByRole('button').firstChild as HTMLElement
        expect(imageElement).toHaveStyle(`background-image: url(${image})`)
    })

    test('displays user icon if has no avatar', () => {
        render(<UserButton />)
        const imageElement =
            screen.getByRole('button').firstChild as HTMLElement
        expect(imageElement).toHaveStyle(`background-image: url(${icon})`)
    })

})