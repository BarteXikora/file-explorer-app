import StyledContentSection from './ContentSection.styles'
import FoldersSection from '../foldersSection/FoldersSection'

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
    </StyledContentSection>
}

export default ContentSection