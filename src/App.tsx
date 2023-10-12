import AppTheme from './themes/AppTheme'
import GlobalStyles from './themes/GlobalStyles'

import SideMenu from './components/layout/sideMenu/SideMenu'
import MainBody from './components/layout/mainBody/MainBody'
import TopBar from './components/layout/topBar/TopBar'
import Header from './components/layout/header/Header'
import ContentSection from './components/layout/contentSection/ContentSection'
import ProcessPill from './components/elements/processPill/ProcessPill'

import ScreenSize from './components/__dev/__screenSize/ScreenSize'

const App = () => {
  return (
    <AppTheme>
      <GlobalStyles />
      <SideMenu />
      <MainBody>
        <TopBar />

        <Header />

        <ContentSection />

        <ProcessPill />
      </MainBody>

      <ScreenSize />
    </AppTheme>
  )
}

export default App