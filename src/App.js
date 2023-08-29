import './App.css';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home'
import Publications from './pages/publications/Publications'
import Photos from './pages/photos/Photos'
import ContactsPage from './pages/contacts/ContactsPage'

function App() {
  return (
      <BrowserRouter>
          <nav className='navigation'>
            <Link to='/'>Головна</Link>
            <Link to='/publications'>Публікації</Link>
            <Link to='/photos'>Фотографії</Link>
            <Link to='/contacts'>Контакти</Link>
          </nav>
          <Routes>
            <Route index element={<Home />} />
            <Route path='publications' element={<Publications />} />
            <Route path='photos' element={<Photos />} />
            <Route path='contacts' element={<ContactsPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
