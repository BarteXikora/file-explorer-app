import { useState } from 'react'
import StyledDropdown from './Dropdown.styles'
import Button from '../button/Button'
import { StyledButtonProps } from '../button/Button.styles'

type DropdownProps = {
    buttonContent: React.ReactNode | string
    dropdownContent: React.ReactNode | string
    buttonOptions?: StyledButtonProps
    dropdownOptions?: {
        xPosition: 'left' | 'right' | undefined
    }
}

const Dropdown = ({ buttonContent, buttonOptions, dropdownContent, dropdownOptions }: DropdownProps) => {
    const [shown, setShown] = useState(false)

    return <StyledDropdown className='dropdown'>
        <Button
            className='button-dropdown'
            variant={buttonOptions?.variant || 'primary'}
            size={buttonOptions?.size || 'big'}
            onClick={() => setShown(!shown)}
        >
            {buttonContent}
        </Button>

        <div
            className={`dropdown-box ${shown && 'shown'} ${dropdownOptions?.xPosition === 'right' && 'dropdown-right'}`}
        >
            {dropdownContent}
        </div>
    </StyledDropdown>
}

export default Dropdown