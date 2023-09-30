import StyledContentSection from './ContentSection.styles'
import FoldersSection from '../foldersSection/FoldersSection'
import FilesSection from '../filesSection/FilesSection'

const __content = {
    folders: [
        { name: 'Nieobrobione' }, { name: 'Pozostałe - większść do śmieci', star: true }
    ],
    files: [
        {
            name: 'Wycieczka na rowery 1',
            extension: 'PNG',
        }
    ]
}

const ContentSection = () => {
    return <StyledContentSection>
        {__content.folders.length > 0 && <FoldersSection content={__content.folders} />}

        {__content.files.length > 0 && <FilesSection content={__content.files} />}
    </StyledContentSection>
}

export default ContentSection