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
    return <div className={`path-dropdown ${isPathCollapsed && 'collapsed'}`}>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'
            buttonOptions={{ size: 'small' }}
            dropdownContent={<>
                {
                    content.map((path, n) => {
                        return <Button variant='tertiary' size='small'>
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