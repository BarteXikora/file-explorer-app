import { render, screen } from '../../../test-utils'
import UsedSpace from './UsedSpace'

describe('Used Space Progress Bar', () => {

    test('renders correctly', () => {
        render(<UsedSpace currentValue='' wholeSpace='' percentage={0} />)
        const usedSpaceElement = screen.getByRole('button')
        expect(usedSpaceElement).toBeInTheDocument()
    })

    test('renders used space text correctly', () => {
        const used = '5 GB', whole = '100 GB'

        render(<UsedSpace currentValue={used} wholeSpace={whole} percentage={0} />)
        const usedSpaceValueElement = screen.queryByText(`${used} z ${whole}`)
        expect(usedSpaceValueElement).toBeInTheDocument()
    })
})