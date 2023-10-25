import { contentType, folderType } from '../../store/features/contentSlice/contentSlice.types'

const getFolderByName = (content: contentType, name: string): contentType => {
    if (content === false) return false

    let folderFound: folderType | false = false

    for (let folder of content.folders || []) {
        if (folder.name === name) folderFound = folder
    }

    return folderFound !== false ? folderFound.content : false
}

const getContentByPath = (content: contentType, path: string): contentType | false => {
    if (content === false) return false

    const pathSteps = path.split('/')

    for (let currentStep of pathSteps) {
        if (currentStep !== '') content = getFolderByName(content, currentStep)
    }

    return content
}

export default getContentByPath