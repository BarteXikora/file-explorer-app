import StyledProjectSelectButton from './ProjectSelectButton.styles'
import iconMyFiles from '../../../assets/icons/icon-my-files.png'

type ProjectSelectButtonProps = {
    picture?: string
    name: string
}

const ProjectSelectButton = ({ picture, name }: ProjectSelectButtonProps) => {
    return (
        <StyledProjectSelectButton variant='menu'>
            <div className="project-picture" style={{ backgroundImage: `url(${picture || iconMyFiles})` }}></div>

            {name}
        </StyledProjectSelectButton>
    )
}

export default ProjectSelectButton