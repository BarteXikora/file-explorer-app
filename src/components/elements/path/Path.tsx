import StyledPath from './Path.styles'
import PathPart from './pathPart/PathPart'
import CollapsePathButton from './collapsePathButton/CollapsePathButton'

const MAX_FOLDER_NAME_LENGTH = 22

type __currentPathProps = string[]
const __curentPath: __currentPathProps = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka na rowery -  sierpień 2023']

const Path = () => {
    return <StyledPath>
        <span>Ścieżka:</span>

        <h1>
            <CollapsePathButton
                content={__curentPath}
                isPathCollapsed={__curentPath.length >= 5}
                maxFolderNameLength={MAX_FOLDER_NAME_LENGTH}
            />

            <div className="path-links">
                {
                    __curentPath.map((path, n) => {
                        if ((__curentPath.length >= 5 && n > __curentPath.length - 4) || __curentPath.length < 5)
                            return <PathPart
                                key={n} path={path}
                                location='#'
                                isLast={n === __curentPath.length - 1}
                                maxFolderNameLength={MAX_FOLDER_NAME_LENGTH}
                            />

                        return <></>
                    })
                }
            </div>
        </h1>
    </StyledPath>
}

export default Path