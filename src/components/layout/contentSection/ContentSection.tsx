import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'

type __contentProps = {
    folders: {
        name: string
        star?: boolean
    }[],
    files: {
        name: string
        extension: string
    }[]
}

const __content: __contentProps = {
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

        {__content.folders.length > 0 && (
            <section>
                <h2>Foldery:</h2>

                <div className="content">
                    {
                        __content.folders.map((folder, n) => {
                            return <Folder name={folder.name} star={folder.star} />
                        })
                    }
                </div>
            </section>
        )}

        {__content.files.length > 0 && (
            <section>
                <h2>Pliki:</h2>

                <div className="content">
                    {
                        __content.files.map((folder, n) => {
                            return <>file</>
                        })
                    }
                </div>
            </section>
        )}

        {(__content.folders.length === 0 && __content.files.length === 0) && <>folder jest pusty</>}

    </StyledContentSection>
}

export default ContentSection