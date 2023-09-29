import StyledFoldersSection from './FoldersSection.styles'
import Folder from '../../elements/folder/Folder'

type FoldersSectionProps = {
    content: { name: string, star?: boolean }[]
}

const FoldersSection = ({ content }: FoldersSectionProps) => {
    return <StyledFoldersSection>
        {
            content.map((folder, n) => {
                return <Folder name={folder.name} star={folder.star} />
            })
        }
    </StyledFoldersSection>
}

export default FoldersSection