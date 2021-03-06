import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userApi";


const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
setTimeout(() => {

  check().then(data => {
    user.setUser(true)
    user.setIsAuth(true)
  }).finally(()=> setLoading(false))

})
  },[])
  return (
   <BrowserRouter>
   <NavBar />
   <AppRouter />

   </BrowserRouter>
  );
})

export default App;
