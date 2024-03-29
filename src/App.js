import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/auth' element={<AuthPage />}/>
          <Route path='/profile'element={<UserProfile />}/>
        </Routes>
      {/* </BrowserRouter> */}
    </Layout>
  );
}

export default App;
