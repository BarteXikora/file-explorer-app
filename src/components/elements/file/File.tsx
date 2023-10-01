import StyledFile from './File.styles'
import Button from '../../ui/button/Button'
import iconMenu from '../../../assets/icons/icon-menu-dots.png'

type FileProps = {
    name: string
    extension: string
    preview?: string
}

const File = ({ name, extension, preview }: FileProps) => {
    return <StyledFile role='button'>
        <div className="preview" style={{ backgroundImage: `url(${preview})` }}>
            <div className="extension">{extension}</div>
        </div>

        <div className="label">
            <span>{name}</span>

            <Button variant='tertiary'>
                <img src={iconMenu} alt="Opcje..." />
            </Button>
        </div>
    </StyledFile>
}

export default File