import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="users" element={<UserList />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
