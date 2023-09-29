import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router";
import NavBar from './components/NavBar';
import UserProfilePage from './pages/userProfilePage';
import UserContext from './context/UserContext';

function App() {

  const [user, setUser] = useState({
    name: "mariela",
    age: 30
  })
  return <>
    {/* se debe envolver toda la app en el Context, a este se le debe agregar su
  identificador (provider/consumer) y se le debe asignar un valor ==> Este se vuelve
  accesible globalmente en la app*/}
    <UserContext.Provider value={user}>
      <div>
        <Routes>
          <Route path="/user" element={<UserProfilePage />} />
        </Routes>
        <h1>ola</h1>
        <NavBar user={user} />
      </div>
    </UserContext.Provider>
    {/* los componentes fuera del context, no tienen acceso/alcance a la informacion q pasa el context */}
    <p>Este elemento NO puede acceder a la data del context </p>
  </>

}

export default App
