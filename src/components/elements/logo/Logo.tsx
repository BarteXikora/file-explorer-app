import StyledLogo from './Logo.styles'
import logo from '../../../assets/img/img-logo.png'

const Logo = () => {
    return <StyledLogo href='./'><img src={logo} alt="Logo Multishare" /></StyledLogo>
}

export default Logo