import styled from 'styled-components'

const StyledFolderName = styled.h1`
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.title};
    margin: 0;
    width: 400px;
    overflow: hidden;
    color: ${(props) => props.theme.colors.grayLighter};
    white-space: nowrap;

    .button-back {
        padding: 0 ${(props) => props.theme.margins.small} 0 0;

        &:hover {
            background-color: ${(props) => props.theme.colors.gray};
        }
    }

    .folder-icon {
        margin-right: ${(props) => props.theme.margins.small};
    }
`

export default StyledFolderName