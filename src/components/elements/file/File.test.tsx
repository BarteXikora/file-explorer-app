import { render, screen } from '../../../test-utils'
import File from './File'

import image from '../../../assets/__files/photo0.png'
import fileIcon from '../../../assets/img/img-file-empty.png'

describe('File component', () => {

    test('renders correctly', async () => {
        render(<File name='test' extension='PNG' />)
        const buttonElements = await screen.findAllByRole('button')
        expect(buttonElements).toHaveLength(2)
    })

    test('displays preview', () => {
        render(<File name='test' extension='PNG' preview={image} />)
        const extensionElement = screen.getByText('PNG')
        const previewElement = extensionElement.parentElement as HTMLElement
        expect(previewElement).toHaveStyle(`background-image: url(${image})`)
    })

    test('displays file icon if has no preview', () => {
        render(<File name='test' extension='extension not found' />)
        const extensionElement = screen.getByText('extension not found')
        const previewElement = extensionElement.parentElement as HTMLElement
        expect(previewElement).toHaveStyle(`background-image: url(${fileIcon})`)
    })

    test('displays star', async () => {
        render(<File name='file with star' extension='PNG' star={true} />)
        const starElement = screen.getByAltText('Oznaczone gwiazdką')
        expect(starElement).toBeInTheDocument()
    })

})