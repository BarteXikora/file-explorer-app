import StyledHeader from './Header.styles'

type __currentPathProps = string[]

const __curentPath: __currentPathProps = ['Moje pliki', 'Prywatne', 'Obrazy', 'Wycieczka sierpień 2023']

const Header = () => {
    return <StyledHeader>
        <div className="path-box">
            <span>Ścieżka:</span>

            <h1>
                {
                    __curentPath.map((path, n) => {
                        if (n + 1 === __curentPath.length) return <>{path} <span className='arrow' /></>
                        return <><a href='#'>{path}</a> <span className='arrow' /> </>
                    })
                }
            </h1>
        </div>
    </StyledHeader>
}

export default Header