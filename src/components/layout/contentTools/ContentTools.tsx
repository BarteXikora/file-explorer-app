import { useState } from 'react'
import { useSelector } from '../../../store/store'
import shortName from '../../../functions/shortName/shortName'

import StyledContentTools from './ContentTools.styles'
import Checkbox from '../../ui/checkbox/Checkbox'
import Button from '../../ui/button/Button'
import Dropdown from '../../ui/dropdown/Dropdown'

import iconDownload from '../../../assets/icons/icon-download.png'
import iconMove from '../../../assets/icons/icon-move.png'
import iconStar from '../../../assets/icons/icon-star.png'
import iconShow from '../../../assets/icons/icon-show.png'
import iconDelete from '../../../assets/icons/icon-delete.png'

const ContentTools = () => {
    const [__isAllSelected, __setIsAllSelected] = useState(false)
    const [areToolsShown, setAreToolsShown] = useState(true)

    const projectName = useSelector(state => state.content.projectName)
    const currentPath = useSelector(state => state.content.currentPath)

    return <StyledContentTools className={areToolsShown ? 'section-shown' : ''}>
        <div className="folder-name">
            <h2>{shortName(currentPath.length > 0 ? currentPath[currentPath.length - 1] : projectName, 35)}:</h2>

            <div className="separator"></div>
        </div>

        <div className="select-all">
            <Checkbox isChecked={__isAllSelected} setIsChecked={__setIsAllSelected} label='Zaznacz wszystko' />
        </div>

        <div className="tools-dropdown">
            <Dropdown
                buttonContent='Narzędzia'
                buttonOptions={{ size: 'small' }}
                dropdownOptions={{ xPosition: 'right' }}
                dropdownContent={<>
                    <Button variant='tertiary' size='small'>
                        <img src={iconDownload} alt="Pobierz" />

                        <span>Pobierz</span>
                    </Button>

                    <Button variant='tertiary' size='small'>
                        <img src={iconMove} alt="Przenieś do..." />

                        <span>Przenieś do...</span>
                    </Button>

                    <Button variant='tertiary' size='small'>
                        <img src={iconStar} alt="Oznacz gwiazdką" />

                        <span>Oznacz gwiazdką</span>
                    </Button>

                    <Button variant='tertiary' size='small'>
                        <img src={iconShow} alt="Pokaż / ukryj" />

                        <span>Pokaż / ukryj</span>
                    </Button>

                    <Button variant='tertiary' size='small'>
                        <img src={iconDelete} alt="Usuń" />

                        <span>Usuń</span>
                    </Button>
                </>} />
        </div>

        <div className={`tools-buttons ${areToolsShown ? 'shown' : ''}`}>
            <div className="separator"></div>

            <Button variant='tertiary' size='small'>
                <img src={iconDownload} alt="Pobierz" />
            </Button>

            <Button variant='tertiary' size='small'>
                <img src={iconMove} alt="Przenieś do..." />
            </Button>

            <Button variant='tertiary' size='small'>
                <img src={iconStar} alt="Oznacz gwiazdką" />
            </Button>

            <Button variant='tertiary' size='small'>
                <img src={iconShow} alt="Pokaż / ukryj" />
            </Button>

            <Button variant='tertiary' size='small'>
                <img src={iconDelete} alt="Usuń" />
            </Button>
        </div>
    </StyledContentTools>
}

export default ContentTools