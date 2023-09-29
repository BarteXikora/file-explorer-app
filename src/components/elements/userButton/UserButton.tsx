import StyledUserButton from './UserButton.styled'
import iconUser from '../../../assets/icons/icon-user-account.png'

type UserButtonProps = {
    userPicture?: string
}

const UserButton = ({ userPicture }: UserButtonProps) => {
    return <StyledUserButton>
        <div
            className={`user-picture ${!userPicture && 'no-picture'}`}
            style={{ backgroundImage: `url(${userPicture || iconUser})` }}
        ></div>
    </StyledUserButton>
}

export default UserButton