import StyledScreenSize from './ScreenSize.styles'

const ScreenSize = () => {
    return <StyledScreenSize>
        <div className="size-box large">L</div>

        <div className="size-box big">B</div>

        <div className="size-box medium">M</div>

        <div className="size-box small">S</div>
    </StyledScreenSize>
}

export default ScreenSize