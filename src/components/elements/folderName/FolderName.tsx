import { useSelector, useDispatch } from '../../../store/store'
import { setPath } from '../../../store/features/contentSlice/contentSlice'

import StyledFolderName from './FolderName.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder-color.png'
import iconBack from '../../../assets/icons/icon-arrow-left-gray-lighter.png'

import shortName from '../../../functions/shortName/shortName'

const FolderName = () => {
    const projectName = useSelector(state => state.content.projectName)
    const currentPath = useSelector(state => state.content.currentPath)

    const dispatch = useDispatch()
    const goBack = () => {
        dispatch(setPath(currentPath.slice(0, currentPath.length - 1)))
    }

    return <StyledFolderName>
        {
            currentPath.length > 0 ?
                <Button
                    variant='tertiary'
                    className='button-back'
                    onClick={() => goBack()}
                >
                    <img src={iconBack} alt="Cofnij" />
                </Button>

                :

                <img src={iconFolder} alt="Folder" className='folder-icon' />
        }

        {shortName(currentPath.length > 0 ? currentPath[currentPath.length - 1] : projectName, 35)}:
    </StyledFolderName>
}

export default FolderName