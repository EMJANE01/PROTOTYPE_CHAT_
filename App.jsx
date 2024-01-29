import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/Publicc/vite.svg'
import './App.css'
import Messages from './components/Messages'
import { supabase } from './supabaseClient'
import Login from './components/Login';

function App() {
  const [secion, setSecion] = useState(null);

  useEffect( () =>{
    getSeccion()
  }, [])

  const getSeccion = async () => {
    const {data} = await supabase.auth.getSession();
    //console.log('secion: ', data);
    setSecion(data.session);
  }

  return (
    <div className="App">
      <div className="tt">
     
      <h1>IN THE SPACE</h1>
      <p>chat de la comunidad</p>
      </div>
      <div className="container">
        { secion ? <Messages/> : <Login/> }
      </div>
    </div>
  )
}

export default App
