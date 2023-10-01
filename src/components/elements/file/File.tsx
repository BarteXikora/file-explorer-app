import StyledFile from './File.styles'
import Button from '../../ui/button/Button'
import iconMenu from '../../../assets/icons/icon-menu-dots.png'

import imgPNG from '../../../assets/img/img-file-png.png'
import imgTXT from '../../../assets/img/img-file-txt.png'
import imgEmptyFile from '../../../assets/img/img-file-empty.png'

type FileProps = {
    name: string
    extension: string
    preview?: string
}

const getPreview = (preview: string | undefined, extension: string) => {
    if (preview) return preview

    switch (extension) {
        case 'PNG': return imgPNG
        case 'TXT': return imgTXT
    }

    return imgEmptyFile
}

const File = ({ name, extension, preview }: FileProps) => {
    return <StyledFile role='button'>
        <div
            className={`preview ${preview !== undefined ? 'preview-image' : ''}`}
            style={{ backgroundImage: `url(${getPreview(preview, extension)})` }}
        >
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