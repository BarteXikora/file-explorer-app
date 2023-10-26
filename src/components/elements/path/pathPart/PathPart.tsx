import shortName from "../../../../functions/shortName/shortName"

type PathPathProps = {
    path: string
    click: () => void
    isLast: boolean
    maxFolderNameLength: number
}

const PathPart = ({ path, click, isLast, maxFolderNameLength }: PathPathProps) => {
    return <>
        <div className='path-part' role="button" onClick={click}>
            {shortName(path, maxFolderNameLength)}
        </div>

        {!isLast && <span className='arrow' />}
    </>
}

export default PathPart