import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Registration } from './pages/Registration';
import { HomePage } from './pages/HomePage';
import { User } from './pages/User';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
