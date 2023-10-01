import StyledFolder from './Folder.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder.png'
import iconMenu from '../../../assets/icons/icon-menu-dots.png'
import iconStar from '../../../assets/icons/icon-star-color.png'

type FolderProps = {
    name: string
    star?: boolean
}

const Folder = ({ name, star }: FolderProps) => {
    return <StyledFolder role='button'>
        <img src={iconFolder} alt="Folder" />

        <span className="name">{name}</span>

        <Button variant='tertiary'><img src={iconMenu} alt="Folder" /></Button>

        {star && <img src={iconStar} alt="Oznaczone gwiazdką" className='star' />}
    </StyledFolder>
}

export default Folder