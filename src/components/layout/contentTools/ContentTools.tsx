import { useState } from 'react'
import StyledContentTools from './ContentTools.styles'
import Checkbox from '../../ui/checkbox/Checkbox'
import Button from '../../ui/button/Button'

import iconDownload from '../../../assets/icons/icon-download.png'
import iconMove from '../../../assets/icons/icon-move.png'
import iconStar from '../../../assets/icons/icon-star.png'
import iconShow from '../../../assets/icons/icon-show.png'
import iconDelete from '../../../assets/icons/icon-delete.png'

const __currentFolderName = 'Wycieczka na rowery -  sierpień 2023'

const ContentTools = () => {
    const [__isAllSelected, __setIsAllSelected] = useState(false)

    return <StyledContentTools>
        <h2>{__currentFolderName}:</h2>

        <div className="separator"></div>

        <Checkbox isChecked={__isAllSelected} setIsChecked={__setIsAllSelected} label='Zaznacz wszystko' />

        <div className="separator"></div>

        <div className="tools-buttons">
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