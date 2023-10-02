import StyledProcessPill from './ProcessPill.styles'
import iconDone from '../../../assets/icons/icon-process-done.png'

const ProcessPill = () => {
    return <StyledProcessPill>
        <img src={iconDone} alt="Aktualne" />

        <span>Wszystko aktualne</span>
    </StyledProcessPill>
}

export default ProcessPill