export type folderType = {
    id: number,
    name: string,
    content: contentType,
    star?: boolean
}

export type fileType = {
    id: number,
    name: string,
    extension: string,
    preview?: string,
    star?: boolean
}

export type contentType = false | {
    folders?: folderType[],
    files?: fileType[]
}

export type initialStateType = {
    projectName: string,
    currentPath: string[],
    currentFolder: contentType,
    content: contentType
}