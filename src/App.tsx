import AppTheme from './themes/AppTheme'
import GlobalStyles from './themes/GlobalStyles'

import SideMenu from './components/layout/sideMenu/SideMenu'

const App = () => {
  return (
    <AppTheme>
      <GlobalStyles />
      <SideMenu />
    </AppTheme>
  )
}

export default App