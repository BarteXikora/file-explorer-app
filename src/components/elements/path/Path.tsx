import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'

import StyledPath from './Path.styles'
import PathPart from './pathPart/PathPart'
import CollapsePathButton from './collapsePathButton/CollapsePathButton'

const MAX_FOLDER_NAME_LENGTH = 22

const Path = () => {
    const projectName = useSelector(state => state.content.projectName)
    const currentPath = useSelector(state => state.content.currentPath)

    const [localPath, setLocalPath] = useState<string[]>([projectName, ...currentPath])
    useEffect(() => {
        setLocalPath([projectName, ...currentPath])

    }, [projectName, currentPath])

    return <StyledPath>
        <span>Ścieżka:</span>

        <h1>
            <CollapsePathButton
                content={localPath}
                isPathCollapsed={localPath.length >= 5}
                maxFolderNameLength={MAX_FOLDER_NAME_LENGTH}
            />

            <div className="path-links">
                {
                    localPath.map((path, n) => {
                        if ((localPath.length >= 5 && n > localPath.length - 4) || localPath.length < 5)
                            return <PathPart
                                key={n} path={path}
                                location='#'
                                isLast={n === localPath.length - 1}
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