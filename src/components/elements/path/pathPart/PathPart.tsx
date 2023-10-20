import shortName from "../../../../functions/shortName/shortName"

type PathPathProps = {
    path: string
    location: string
    isLast: boolean
    maxFolderNameLength: number
}

const PathPart = ({ path, location, isLast, maxFolderNameLength }: PathPathProps) => {
    return <>
        <a href={location}>
            {shortName(path, maxFolderNameLength)}
        </a>

        {!isLast && <span className='arrow' />}
    </>
}

export default PathPart