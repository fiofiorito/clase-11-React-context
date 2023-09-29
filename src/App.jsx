import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router";
import NavBar from './components/NavBar';
import UserProfilePage from './pages/userProfilePage';

function App() {
  // la data debe llegar desde aca a User.jsx, en el caso donde NO hay context se debe pasar la info
  // de manera unidireccional entre cada componente (de padre a hijo)
  const [user, setUser] = useState({
    name: "mariela",
    age: 30
  })
  return <div>
    <Routes>
      {/* El elemento UserProfilePage tiene como props user para poder recibir la info de App */}
      <Route path="/user" element={<UserProfilePage user={user} />} />
    </Routes>
    <h1>ola</h1>
    <NavBar user={user} />



  </div>
}

export default App
