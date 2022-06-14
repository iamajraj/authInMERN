import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route exact path="/" element={<Main />} />}
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
