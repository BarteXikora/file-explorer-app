import StyledHeader from './Header.styles'
import Path from '../../elements/path/Path'
import Button from '../../ui/button/Button'

import iconUpload from '../../../assets/icons/icon-upload.png'
import iconNewFolder from '../../../assets/icons/icon-new-folder.png'

const Header = () => {
    return <StyledHeader>
        <div className="path-box">
            <Path />
        </div>

        <div className="buttons-box">
            <Button>
                <img src={iconUpload} alt="Wrzuć pliki na dysk" />

                <span>Wrzuć pliki na dysk</span>
            </Button>

            <Button>
                <img src={iconNewFolder} alt="Utwórz folder" />

                <span>Utwórz folder</span>
            </Button>
        </div>
    </StyledHeader>
}

export default Header