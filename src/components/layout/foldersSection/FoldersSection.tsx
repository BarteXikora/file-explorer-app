import StyledFoldersSection from './FoldersSection.styles'
import Folder from '../../elements/folder/Folder'

type FoldersSectionProps = {
    content: { name: string, star?: boolean }[]
}

const FoldersSection = ({ content }: FoldersSectionProps) => {
    return <StyledFoldersSection>
        <h2>Foldery:</h2>

        <div className="content">
            {
                content.map((folder, n) => {
                    return <Folder name={folder.name} star={folder.star} />
                })
            }
        </div>
    </StyledFoldersSection>
}

export default FoldersSection