const shortName = (name: string = '', maxLength: number): string => {
    if (name.length <= maxLength) return name

    let newName = name.substring(0, maxLength - 3)

    while (newName.length > 0 && newName[newName.length - 1] === ' ')
        newName = newName.substring(0, newName.length - 1)

    newName += '...'

    return newName
}

export default shortName