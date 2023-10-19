import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'

import shortName from '../../../functions/shortName/shortName'

import photo0 from '../../../assets/__files/photo0.png'
import photo1 from '../../../assets/__files/photo1.png'
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
        star?: boolean
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
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3,
            star: true
        }, {
            name: 'info',
            extension: 'TXT'
        }, {
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: photo1
        }, {
            name: 'Wycieczka na rowery 3',
            extension: 'PNG',
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3,
            star: true
        }, {
            name: 'info',
            extension: 'TXT'
        }, {
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: photo1
        }, {
            name: 'Wycieczka na rowery 3',
            extension: 'PNG',
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3,
            star: true
        }, {
            name: 'info',
            extension: 'TXT'
        }, {
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: photo1
        }, {
            name: 'Wycieczka na rowery 3',
            extension: 'PNG',
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3,
            star: true
        }, {
            name: 'info',
            extension: 'TXT'
        }, {
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: photo1
        }, {
            name: 'Wycieczka na rowery 3',
            extension: 'PNG',
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3,
            star: true
        }, {
            name: 'info',
            extension: 'TXT'
        }, {
            name: 'Wycieczka na rowery 2',
            extension: 'PNG',
            preview: photo1
        }, {
            name: 'Wycieczka na rowery 3',
            extension: 'PNG',
        }, {
            name: 'Wycieczka na rowery 4',
            extension: 'JPG',
            preview: photo3,
            star: true
        }, {
            name: 'info',
            extension: 'TXT'
        }
    ]
}

const __currentFolderName = 'Wycieczka na rowery -  sierpień 2023'

const ContentSection = () => {
    return <StyledContentSection>

        <h1>{shortName(__currentFolderName, 30)}:</h1>

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
                            return <File
                                key={n}
                                name={file.name}
                                extension={file.extension}
                                preview={file.preview}
                                star={file.star}
                            />
                        })
                    }
                </div>
            </section>
        )}

        {(__content.folders.length === 0 && __content.files.length === 0) && <>folder jest pusty</>}

    </StyledContentSection>
}

export default ContentSection