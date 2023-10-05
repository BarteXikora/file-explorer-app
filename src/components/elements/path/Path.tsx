import StyledPath from './Path.styles'
import Button from '../../ui/button/Button'

type __currentPathProps = string[]

const __curentPath: __currentPathProps = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka sierpień 2023', 'test', 'test', 'test']

const PathPart = ({ path, location }: { path: string, location: string }) => {
    let shortenPath = path.substring(0, 25)
    if (path.length > 25) shortenPath += '...'

    return <>
        <a href={location}>
            {shortenPath}
        </a>

        <span className='arrow' />
    </>
}

const CollapsePathButton = ({ content }: { content: string[] }) => {
    return <>
        <Button variant='tertiary'>Ścieżka</Button>

        ...

        <span className='arrow' />

        <div className="dropdown">
            {
                content.map((path, n) => {
                    return <Button key={n} variant='tertiary' size='small'>
                        {
                            path
                        }
                    </Button>
                })
            }
        </div>
    </>
}

const Path = () => {
    return <StyledPath>
        <span>Ścieżka:</span>

        <h1>
            {
                __curentPath.length > 5 && <CollapsePathButton content={__curentPath.slice(0, __curentPath.length - 3)} />
            }

            {
                __curentPath.map((path, n) => {
                    if (__curentPath.length > 5 && n > 3) return <PathPart key={n} path={path} location='#' />
                    return <></>
                })
            }
        </h1>
    </StyledPath>
}

export default Path