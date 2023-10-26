import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store/store'

import AppTheme from './themes/AppTheme'
import GlobalStyles from './themes/GlobalStyles'

import MainPage from './components/pages/mainPage/MainPage'
import NotFoundPage from './components/pages/notFoundPage/NotFoundPage'

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

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AppTheme>
    </Provider>
  )
}

export default App