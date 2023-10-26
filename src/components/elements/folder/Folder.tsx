import StyledFolder from './Folder.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder.png'
import iconMenu from '../../../assets/icons/icon-menu-dots.png'
import iconStar from '../../../assets/icons/icon-star-color.png'

type FolderProps = {
    name: string
    click: () => void
    star?: boolean
}

const Folder = ({ name, star, click }: FolderProps) => {
    return <StyledFolder role='button' onDoubleClick={click}>
        <img src={iconFolder} alt="Folder" />

        <span className="name">{name}</span>

        <Button variant='tertiary'><img src={iconMenu} alt="Folder" /></Button>

        {star && <img src={iconStar} alt="Oznaczone gwiazdką" className='star' />}
    </StyledFolder>
}

export default Folder