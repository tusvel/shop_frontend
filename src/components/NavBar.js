import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>КупиДевайс</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-5"
                            onClick={logOut}
                        >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;