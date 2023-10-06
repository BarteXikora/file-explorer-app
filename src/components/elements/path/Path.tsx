import StyledPath from './Path.styles'
import Dropdown from '../../ui/dropdown/Dropdown'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder.png'

const MAX_FOLDER_NAME_LENGTH = 20

type __currentPathProps = string[]

const __curentPath: __currentPathProps = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery -  sierpień 2023']

const getShortName = (name: string) => {
    let shortenName = name.substring(0, MAX_FOLDER_NAME_LENGTH)
    if (name.length > MAX_FOLDER_NAME_LENGTH) shortenName += '...'

    return shortenName
}

const PathPart = ({ path, location }: { path: string, location: string }) => {
    return <>
        <a href={location}>
            {getShortName(path)}
        </a>

        <span className='arrow' />
    </>
}

const CollapsePathButton = ({ content }: { content: string[] }) => {
    return <>
        <Dropdown
            buttonContent='Wyświetl ścieżkę'
            dropdownContent={<>
                {
                    content.map((path, n) => {
                        return <Button variant='tertiary' size='small'>
                            <img src={iconFolder} alt="Folder" />

                            {getShortName(path)}
                        </Button>
                    })
                }
            </>}
        />

        <span>...</span>

        <span className='arrow' />
    </>
}

const Path = () => {
    return <StyledPath>
        <span>Ścieżka:</span>

        <h1>
            {
                // __curentPath.length > 5 && <CollapsePathButton content={__curentPath.slice(0, __curentPath.length - 3)} />
                __curentPath.length >= 5 && <CollapsePathButton content={__curentPath} />
            }

            {
                __curentPath.map((path, n) => {
                    if ((__curentPath.length >= 5 && n > __curentPath.length - 4) || __curentPath.length < 5)
                        return <PathPart key={n} path={path} location='#' />

                    return <></>
                })
            }
        </h1>
    </StyledPath>
}

export default Path