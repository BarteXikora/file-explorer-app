import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setCurrentToPath } from '../../../store/features/contentSlice/contentSlice'

import StyledContentSection from './ContentSection.styles'
import FolderName from '../../elements/folderName/FolderName'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'
import EmptyFolder from '../../elements/emptyFolder/EmptyFolder'
import WrongPath from '../../elements/wrongPath/WrongPath'

import useChangePath from '../../../functions/useChangePath/useChangePath'

const ContentSection = () => {
    const content = useSelector(state => state.content.currentFolder)
    const dispatch = useDispatch()
    const { localPath, changePath } = useChangePath()

    useEffect(() => {
        dispatch(setCurrentToPath())

    }, [dispatch, localPath])

    return <StyledContentSection>
        <FolderName />

        {content !== false && content.folders && content.folders.length > 0 && (
            <section>
                <h2>Foldery:</h2>

                <div className="content">
                    {
                        content.folders.map((folder, n) => {
                            return <Folder
                                key={n}
                                name={folder.name}
                                star={folder.star}
                                click={() => changePath([...localPath, folder.name])}
                            />
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
                                preview={file.preview}
                                star={file.star}
                            />
                        })
                    }
                </div>
            </section>
        )}

        {content === false && <WrongPath />}

        {
            content !== false && (
                (!content.folders || content.folders.length === 0) && (!content.files || content.files.length === 0)
            ) && <EmptyFolder />
        }

    </StyledContentSection>
}

export default ContentSection