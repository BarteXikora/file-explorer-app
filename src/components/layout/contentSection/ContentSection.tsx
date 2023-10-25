import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setCurrentToPath } from '../../../store/features/contentSlice/contentSlice'

import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'

import shortName from '../../../functions/shortName/shortName'

const ContentSection = () => {
    const projectName = useSelector(state => state.content.projectName)
    const currentPath = useSelector(state => state.content.currentPath)
    const content = useSelector(state => state.content.currentFolder)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentToPath())

    }, [dispatch, currentPath])

    return <StyledContentSection>

        <h1>{shortName(currentPath.length > 0 ? currentPath[currentPath.length - 1] : projectName, 35)}:</h1>

        {content !== false && content.folders && content.folders.length > 0 && (
            <section>
                <h2>Foldery:</h2>

                <div className="content">
                    {
                        content.folders.map((folder, n) => {
                            return <Folder key={n} name={folder.name} /*star={folder.star}*/ />
                        })
                    }
                </div>
            </section>
        )}

        {content !== false && content.files && content.files.length > 0 && (
            <section>
                <h2>Pliki:</h2>

                <div className="content">
                    {
                        content.files.map((file, n) => {
                            return <File
                                key={n}
                                name={file.name}
                                extension={file.extension}
                            // preview={file.preview}
                            // star={file.star}
                            />
                        })
                    }
                </div>
            </section>
        )}

        {content === false && <>Nie znaleziono ścieżki</>}

        {
            content !== false && (
                (!content.folders || content.folders.length === 0) && (!content.files || content.files.length === 0)
            ) && <>Ten folder jest pusty</>
        }

    </StyledContentSection>
}

export default ContentSection