import AppTheme from './themes/AppTheme'
import GlobalStyles from './themes/GlobalStyles'

import SideMenu from './components/layout/sideMenu/SideMenu'
import MainBody from './components/layout/mainBody/MainBody'
import TopBar from './components/layout/topBar/TopBar'
import Header from './components/layout/header/Header'

const App = () => {
  return (
    <AppTheme>
      <GlobalStyles />
      <SideMenu />
      <MainBody>
        <TopBar />

        <Header />
      </MainBody>
    </AppTheme>
  )
}

export default App