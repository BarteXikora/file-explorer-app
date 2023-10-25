import StyledEmptyFolder from './EmptyFolder.styles'
import Button from '../../ui/button/Button'

import imgEmptyFolder from '../../../assets/img/img-empty-folder.png'
import iconUpload from '../../../assets/icons/icon-upload.png'
import iconBack from '../../../assets/icons/icon-arrow-left.png'

const EmptyFolder = () => {
    return <StyledEmptyFolder>
        <img src={imgEmptyFolder} alt="Pusty folder" />

        <div className="info-box">
            <h3>Ten folder jest pusty!</h3>

            <p>
                Możesz przesłać pliki na dysk poprzez przeciągnięcie i opuszczenie je na okno przeglądarki.
            </p>

            <Button variant='secondary' className='button-back'>
                <img src={iconBack} alt="Cofnij się" />
            </Button>

            <Button>
                <img src={iconUpload} alt="Wyślij plik na dysk" />

                Wyślij plik na dysk
            </Button>
        </div>
    </StyledEmptyFolder>
}

export default EmptyFolder