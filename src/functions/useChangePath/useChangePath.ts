import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from '../../store/store'
import { setPath } from '../../store/features/contentSlice/contentSlice'

const useChangePath = () => {
    const projectName = useSelector(state => state.content.projectName)
    const localPath = useSelector(state => state.content.currentPath)
    const [fullPath, setFullPath] = useState<string[]>([])

    useEffect(() => {
        setFullPath([projectName, ...localPath])

    }, [projectName, localPath])

    const dispatch = useDispatch()

    const changePath = (path: string[]) => {
        dispatch(setPath(path))
    }

    return { projectName, localPath, fullPath, changePath }
}

export default useChangePath