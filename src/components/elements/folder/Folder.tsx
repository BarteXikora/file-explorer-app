import StyledFolder from './Folder.styles'

type FolderProps = {
    name: string
    star?: boolean
}

const Folder = ({ name, star }: FolderProps) => {
    return <StyledFolder role='button'>{name} {star && '*'}</StyledFolder>
}

export default Folder