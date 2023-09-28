import StyledMainBody from './MainBody.styles'

type MainBodyProps = {
    children?: string | JSX.Element | JSX.Element[]
}

const MainBody = ({ children }: MainBodyProps) => {
    return <StyledMainBody>{children}</StyledMainBody>
}

export default MainBody