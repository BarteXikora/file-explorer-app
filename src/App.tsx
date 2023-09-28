import AppTheme from './themes/AppTheme'
import GlobalStyles from './themes/GlobalStyles'

import SideMenu from './components/layout/sideMenu/SideMenu'
import MainBody from './components/layout/mainBody/MainBody'

const App = () => {
  return (
    <AppTheme>
      <GlobalStyles />
      <SideMenu />
      <MainBody>
        main body
      </MainBody>
    </AppTheme>
  )
}

export default App