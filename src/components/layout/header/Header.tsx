import { useState } from 'react'

import StyledHeader from './Header.styles'
import Path from '../../elements/path/Path'
import Button from '../../ui/button/Button'
import Checkbox from '../../ui/checkbox/Checkbox'

import iconUpload from '../../../assets/icons/icon-upload.png'
import iconNewFolder from '../../../assets/icons/icon-new-folder.png'
import iconDownload from '../../../assets/icons/icon-download.png'
import iconMove from '../../../assets/icons/icon-move.png'
import iconStar from '../../../assets/icons/icon-star.png'
import iconShow from '../../../assets/icons/icon-show.png'
import iconDelete from '../../../assets/icons/icon-delete.png'

const Header = () => {
    const [__allSelected, __setAllSelected] = useState(false)

    return <StyledHeader>
        <Path />

        <div className="functions-box">
            <Checkbox isChecked={__allSelected} setIsChecked={__setAllSelected} label='Zaznacz wszystko' />

            <span className="separator" />

            <Button size='small'>
                <img src={iconUpload} alt="Wrzuć pliki na dysk" />

                Wrzuć pliki na dysk
            </Button>

            <Button variant='tertiary' size='small'>
                <img src={iconNewFolder} alt="Utwórz folder" />

                Utwórz folder
            </Button>

            <div className="selected-operations">
                <span className="separator" />

                <Button variant='tertiary' size='small'>
                    <img src={iconDownload} alt="Pobierz" />
                </Button>

                <Button variant='tertiary' size='small'>
                    <img src={iconMove} alt="Przenieś..." />
                </Button>

                <Button variant='tertiary' size='small'>
                    <img src={iconStar} alt="Oznacz gwiazdką" />
                </Button>

                <Button variant='tertiary' size='small'>
                    <img src={iconShow} alt="Zmień widoczność" />
                </Button>

                <Button variant='tertiary' size='small'>
                    <img src={iconDelete} alt="Usuń" />
                </Button>
            </div>
        </div>
    </StyledHeader>
}

export default Header