import { Button, Card, Container, Form, FormControl, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";

const Auth = () => {
    const location = useLocation()
    console.log(location);
    const isLogin = location.pathname === LOGIN_ROUTE 
    return (
<Container
   className="d-flex justify-content-center align-items-center"
   style={{height: window.innerHeight - 54}}
        >
<Card style={{width:600}} className="p-5">
    <h2 className="m-auto">{isLogin? "Авторизация" : "Регистрация"}</h2>
<Form className="d-flex flex-column">
    <FormControl
    className="mt-2"
    placeholder="введите ваш e-mail"
    />
    <FormControl
    className="mt-2"
    placeholder="введите ваш пароль"
    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            // onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
</Form>
</Card>
 </Container>
      ); 
  };
  
  
  export default Auth