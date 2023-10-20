import { render, screen } from '../../../test-utils'
import ProjectSelectButton from './ProjectSelectButton'

import image from '../../../assets/__files/photo0.png'
import icon from '../../../assets/icons/icon-my-files.png'

describe('Project select button', () => {

    test('renders correctly', () => {
        render(<ProjectSelectButton picture='' name='project name' />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    test('displays name', () => {
        render(<ProjectSelectButton picture='' name='project name' />)
        const textElement = screen.getByText('project name')
        expect(textElement).toBeInTheDocument()
    })

    test('displays project image', () => {
        render(<ProjectSelectButton picture={image} name='project name' />)
        const imageElement = screen.getByRole('button').firstChild as HTMLElement
        expect(imageElement).toHaveStyle(`background-image: url(${image})`)
    })

    test('displays icon if has no project image', () => {
        render(<ProjectSelectButton picture='' name='project name' />)
        const imageElement = screen.getByRole('button').firstChild as HTMLElement
        expect(imageElement).toHaveStyle(`background-image: url(${icon})`)
    })

})