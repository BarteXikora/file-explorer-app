import StyledPath from './Path.styles'
import PathPart from './pathPart/PathPart'
import CollapsePathButton from './collapsePathButton/CollapsePathButton'

import useChangePath from '../../../functions/useChangePath/useChangePath'

const MAX_FOLDER_NAME_LENGTH = 22

const Path = () => {
    const { fullPath, changePath } = useChangePath()

    return <StyledPath>
        <span>Ścieżka:</span>

        <h1>
            <CollapsePathButton
                isPathCollapsed={fullPath.length >= 5}
                maxFolderNameLength={MAX_FOLDER_NAME_LENGTH}
            />

            <div className="path-links">
                {
                    fullPath.map((path, n) => {
                        if ((fullPath.length >= 5 && n > fullPath.length - 4) || fullPath.length < 5)
                            return <PathPart
                                key={n} path={path}
                                click={() => changePath(fullPath.slice(1, n + 1))}
                                isLast={n === fullPath.length - 1}
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