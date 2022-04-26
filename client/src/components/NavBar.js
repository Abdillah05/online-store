import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {observer} from "mobx-react-lite";

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";


const NavBar = observer( () => {
 const { user } = useContext(Context)
const navigate = useNavigate()

const logOut = () => {
  user.setUser({})
  user.setIsAuth(false)
}
    return ( 
        <>
         <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Авито на минималках</NavLink>
    {user.isAuth?
    <Nav className="ml-auto" style={{color:'white'}}>
      <Button 
      variant={"outline-light"}
      onClick={() => navigate(ADMIN_ROUTE)}
      >
        Админ панель</Button>
      <Button 
      variant={"outline-light"}  
      className="ml-2"
      onClick={()=> logOut()}
      >
        Выйти</Button>
    </Nav>
    :
    <Nav className="ml-auto" style={{color:'white'}}>
     
      <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} >Авторизация</Button>
    </Nav>
}
    </Container>
  </Navbar>
  

        </>
     );
})
export default NavBar;