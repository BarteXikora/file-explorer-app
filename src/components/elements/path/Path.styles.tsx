import styled, { css } from 'styled-components'

const rolledPath = css`
    padding: 0;
    margin: 0;

    h1 {
        margin-top: 0 !important;
    }

    span {
        display: none;
    }

    &::after {
        display: none;
    }

    .path-dropdown {
        display: block;
    }

    .path-links {
        display: none;
    }
`

const StyledPath = styled.div`
    padding: ${(props) => props.theme.margins.small} 0;
    padding-left: 25px;
    margin-bottom: ${(props) => props.theme.margins.small};
    position: relative;
    font-weight: bold;

    &::after {
        position: absolute;
        content: '';
        width: 9px;
        height: 100%;
        background-color: ${(props) => props.theme.colors.primary};
        top: 0;
        left: 0;
        border-radius: ${(props) => props.theme.borderRadiuses.pill};
    }

    h1 {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.small};
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.title};
        cursor: default;

        &:has(.collapsed) {
            margin-top: ${(props) => props.theme.margins.small};
        }
    }

    a {
        display: inline-block;
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;
        transition: ${(props) => props.theme.transition};
        max-width: 20%;
        white-space: nowrap;
        overflow: hidden;

        &:hover {
            color: ${(props) => props.theme.colors.primaryLighter};
        }
    }

    .path-dropdown {
        display: none;

        &.collapsed {
            display: flex;
            align-items: center;
            gap: ${(props) => props.theme.margins.small};

            .arrow {
                display: none;
            }
        }
    }

    .dropdown button {
        white-space: nowrap;
    }
    

    .dropdown-box {
        font-size: ${(props) => props.theme.fontSizes.default};
        display: flex;
        flex-direction: column;

        button {
            width: 100%;
            margin-bottom: ${(props) => props.theme.margins.small};
            margin-right: ${(props) => props.theme.margins.medium};
        }
    }

    .path-links {
        display: flex;
        align-items: center;
        width: 100%;
        gap: ${(props) => props.theme.margins.small};
    }

   .arrow {
       position: relative;
       display: inline-block;
       width: 30px;

       &::after {
           position: absolute;
           content: '';
           width: 12px;
           height: 12px;
           top: -5px;
           left: 5px;
           transform: rotateZ(45deg);
           border-top: 2px solid ${(props) => props.theme.colors.white};
           border-right: 2px solid ${(props) => props.theme.colors.white};
           border-radius: 0 ${(props) => props.theme.borderRadiuses.small} 0 0;
       }
   }

   .header-rolled & { 
        ${rolledPath} 
    }
   
    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        ${rolledPath}    
    }
`

export default StyledPath