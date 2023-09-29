import StyledCheckbox from './Checkbox.styles'

type CheckboxProps = {
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
    label?: string
}

const Checkbox = ({ isChecked, setIsChecked, label }: CheckboxProps) => {
    return <StyledCheckbox>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} id='checkbox-input' />

        <div className="check-mark" onClick={() => setIsChecked(!isChecked)}></div>

        <label htmlFor='checkbox-input'>{label}</label>
    </StyledCheckbox>
}

export default Checkbox