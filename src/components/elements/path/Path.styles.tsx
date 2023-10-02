import styled from 'styled-components'

const StyledPath = styled.div`
    padding: ${(props) => props.theme.margins.small} 0;
    padding-left: 25px;
    margin-bottom: ${(props) => props.theme.margins.medium};
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
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.title};
        cursor: default;
    }

    a {
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;
        transition: ${(props) => props.theme.transition};

        &:hover {
            color: ${(props) => props.theme.colors.primaryLighter};
        }
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
           top: -14px;
           left: 5px;
           transform: rotateZ(45deg);
           border-top: 2px solid ${(props) => props.theme.colors.white};
           border-right: 2px solid ${(props) => props.theme.colors.white};
           border-radius: 0 ${(props) => props.theme.borderRadiuses.small} 0 0;
       }
   }
`

export default StyledPath