import { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";

function Nav() {
   const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))
   const [toggle, setToggle] = useState(false);

   const handleLogout = () => {
      sessionStorage.removeItem("usuarioLogado")
      window.location = '/';
   }


   return (
      <nav>
         <h1>Clinical Manager</h1>

         <div className='informacao' style={userLogado == null ? { display: "none" } : { }}>
            <p>{userLogado != null ? `Usuario logado: ${userLogado.nome}` : ""}</p>
            <p>{userLogado != null ? `Email: ${userLogado.email}` : ""}</p>
            <button onClick={handleLogout}>Logout</button>
         </div>

         <div className="menu">
            <HiBars3 className='icone' onClick={() => setToggle((prev) => !prev)} />
            <div className={`menu1 ${toggle ? 'open' : ''}`}>
               <div className='info'>
                  <p>{userLogado != null ? `Usuario logado: ${userLogado.nome}` : ""}</p>
                  <p>{userLogado != null ? `Email: ${userLogado.email}` : ""}</p>
                  <button onClick={handleLogout}>Logout</button>
               </div>
            </div>
         </div>

      </nav>
   )
}

export default Nav