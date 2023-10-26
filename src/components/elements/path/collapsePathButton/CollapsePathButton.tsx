import { useDispatch } from '../../../../store/store'
import { setPath } from '../../../../store/features/contentSlice/contentSlice'

import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'

import shortName from '../../../../functions/shortName/shortName'
import iconFolder from '../../../../assets/icons/icon-folder.png'

type CollapsePathButtonProps = {
    content: string[]
    isPathCollapsed: boolean
    maxFolderNameLength: number
}

const CollapsePathButton = ({ content, isPathCollapsed, maxFolderNameLength }: CollapsePathButtonProps) => {
    const dispatch = useDispatch()
    const navigateToPath = (path: string[]) => {
        dispatch(setPath(path))
    }

    return <div className={`path-dropdown ${isPathCollapsed && 'collapsed'}`}>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'
            buttonOptions={{ size: 'small' }}
            dropdownContent={<>
                {
                    content.map((path, n) => {
                        return <Button
                            key={n}
                            variant='tertiary'
                            size='small'
                            onClick={() => navigateToPath(content.slice(1, n + 1))}
                        >
                            <img src={iconFolder} alt="Folder" />

                            {shortName(path, maxFolderNameLength)}
                        </Button>
                    })
                }
            </>}
        />

        {
            isPathCollapsed && <>
                <span>...</span>

                <span className='arrow' />
            </>
        }
    </div>
}

export default CollapsePathButton