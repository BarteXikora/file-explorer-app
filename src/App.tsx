import { Provider } from 'react-redux'
import { store } from './store/store'

import AppTheme from './themes/AppTheme'
import GlobalStyles from './themes/GlobalStyles'

import MainPage from './components/pages/MainPage'

import ScreenSize from './components/__dev/__screenSize/ScreenSize'

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <GlobalStyles />

        <ScreenSize />

        <MainPage />
      </AppTheme>
    </Provider>
  )
}

export default App