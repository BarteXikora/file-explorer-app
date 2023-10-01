import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'

import photo0 from '../../../assets/__files/photo0.png'
import photo1 from '../../../assets/__files/photo1.png'
import photo2 from '../../../assets/__files/photo2.png'
import photo3 from '../../../assets/__files/photo3.png'

type __contentProps = {
    folders: {
        name: string
        star?: boolean
    }[],
    files: {
        name: string
        extension: string
        preview?: string
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
            preview: photo0
        }, {
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: photo1
        }, {
            name: 'Wycieczka na rowery 3',
            extension: 'PNG',
            preview: photo2
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3
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
                            return <Folder key={n} name={folder.name} star={folder.star} />
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
                        __content.files.map((file, n) => {
                            return <File key={n} name={file.name} extension={file.extension} preview={file.preview} />
                        })
                    }
                </div>
            </section>
        )}

        {(__content.folders.length === 0 && __content.files.length === 0) && <>folder jest pusty</>}

    </StyledContentSection>
}

export default ContentSection