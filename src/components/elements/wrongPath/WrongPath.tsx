import StyledWrongPath from './WrongPath.styles'
import Button from '../../ui/button/Button'

import imgNotFound from '../../../assets/img/img-404.png'
import iconFolder from '../../../assets/icons/icon-folder.png'

import useChangePath from '../../../functions/useChangePath/useChangePath'

const WrongPath = () => {
    const { changePath } = useChangePath()

    return <StyledWrongPath>
        <img src={imgNotFound} alt="Nie znaleziono ścieżki" />

        <div className="info-box">
            <h3>Nie znaleziono ścieżki!</h3>

            <p>Proszę, upewnij się, że podana ścieżka jest prawidłowa. Folder mógł zostać usunięty, lub przeniesiony.</p>

            <Button onClick={() => changePath([])}>
                <img src={iconFolder} alt="Folder główny" />

                Wszystkie pliki
            </Button>
        </div>
    </StyledWrongPath>
}

export default WrongPath