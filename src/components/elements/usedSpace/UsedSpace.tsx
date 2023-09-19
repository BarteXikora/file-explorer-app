import StyledUsedSpace from './UsedSpace.styles'

type UsedSpaceProps = {
    currentValue: string
    wholeSpace: string
    percentage: number
}

const UsedSpace = ({ currentValue, wholeSpace, percentage }: UsedSpaceProps) => {
    return <StyledUsedSpace>
        <h3>Aktualnie wykorzystane miejsce:</h3>

        <div className="progress-bar">
            <div className="current-progress" style={{ width: percentage + '%' }}></div>
        </div>

        <p>{currentValue} z {wholeSpace}</p>
    </StyledUsedSpace>
}

export default UsedSpace