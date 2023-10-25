export type folderType = {
    id: number,
    name: string,
    content: contentType
}

export type fileType = {
    id: number,
    name: string,
    extension: string
}

export type contentType = false | {
    folders?: folderType[],
    files?: fileType[]
}

export type initialStateType = {
    projectName: string,
    currentFolder: contentType,
    content: contentType
}