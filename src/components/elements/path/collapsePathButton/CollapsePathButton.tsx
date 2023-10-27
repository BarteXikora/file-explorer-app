import Dropdown from '../../../ui/dropdown/Dropdown'
import Button from '../../../ui/button/Button'

import iconFolder from '../../../../assets/icons/icon-folder.png'

import shortName from '../../../../functions/shortName/shortName'
import useChangePath from '../../../../functions/useChangePath/useChangePath'

type CollapsePathButtonProps = {
    isPathCollapsed: boolean
    maxFolderNameLength: number
}

const CollapsePathButton = ({ isPathCollapsed, maxFolderNameLength }: CollapsePathButtonProps) => {
    const { fullPath, changePath } = useChangePath()

    return <div className={`path-dropdown ${isPathCollapsed && 'collapsed'}`}>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'
            buttonOptions={{ size: 'small' }}
            dropdownContent={<>
                {
                    fullPath.map((path, n) => {
                        return <Button
                            key={n}
                            variant='tertiary'
                            size='small'
                            onClick={() => changePath(fullPath.slice(1, n + 1))}
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