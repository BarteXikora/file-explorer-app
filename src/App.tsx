import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

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

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/my-files' />} />

            <Route path='/my-files/*' element={<MainPage />} />

            <Route path='*' element={'404'} />
          </Routes>
        </BrowserRouter>
      </AppTheme>
    </Provider>
  )
}

export default App