import StyledFolder from './Folder.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder.png'
import iconMenu from '../../../assets/icons/icon-menu-dots.png'

type FolderProps = {
    name: string
    star?: boolean
}

const Folder = ({ name, star }: FolderProps) => {
    return <StyledFolder role='button'>
        <img src={iconFolder} alt="Folder" />

        {name}

        <Button variant='tertiary'><img src={iconMenu} alt="Folder" /></Button>
    </StyledFolder>
}

export default Folder