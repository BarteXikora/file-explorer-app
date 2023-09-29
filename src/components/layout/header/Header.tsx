import StyledHeader from './Header.styles'
import Button from '../../elements/button/Button'

import iconUpload from '../../../assets/icons/icon-upload.png'
import iconNewFolder from '../../../assets/icons/icon-new-folder.png'
import iconDownload from '../../../assets/icons/icon-download.png'
import iconMove from '../../../assets/icons/icon-move.png'
import iconStar from '../../../assets/icons/icon-star.png'
import iconShow from '../../../assets/icons/icon-show.png'
import iconDelete from '../../../assets/icons/icon-delete.png'

type __currentPathProps = string[]

const __curentPath: __currentPathProps = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka sierpień 2023']

const Header = () => {
    return <StyledHeader>
        <div className="path-box">
            <span>Ścieżka:</span>

            <h1>
                {
                    __curentPath.map((path, n) => {
                        if (n + 1 === __curentPath.length) return <>{path} <span className='arrow' /></>
                        return <><a href='#'>{path}</a> <span className='arrow' /> </>
                    })
                }
            </h1>
        </div>

        <div className="functions-box">
            <label>
                <input type="checkbox" />

                Zaznacz wszystko
            </label>

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