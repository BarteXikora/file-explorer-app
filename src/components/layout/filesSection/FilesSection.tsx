import StyledFilesSection from './FilesSection.styles'

type FilesSectionProps = {
    content: { name: string }[]
}

const FilesSection = ({ content }: FilesSectionProps) => {
    return <StyledFilesSection>
        <div className="content">
            {
                content.map((file, n) => {
                    return <>{file.name}</>
                })
            }
        </div>
    </StyledFilesSection>
}

export default FilesSection