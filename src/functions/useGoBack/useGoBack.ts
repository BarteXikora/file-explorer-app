import { useSelector, useDispatch } from '../../store/store'
import { setPath } from '../../store/features/contentSlice/contentSlice'

const useGoBack = () => {
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    const goBack = () => {
        dispatch(setPath(currentPath.slice(0, currentPath.length - 1)))
    }

    return goBack
}

export default useGoBack