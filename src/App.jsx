import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Layout from './components/Layout/Layout'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='contacts' element={<ContactsPage />} />
        </Route>
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
