import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import '../../Style.scss'

function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-login')) {
            history.push("/users")
        }
    }, [])

    async function login(){
        let item = { email, password };
        let result = await fetch("https://reqres.in/api/login", {
            method: 'POST', 
            headers: {
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            },
            body: JSON.stringify(item)
        });

        result = await result.json();
        localStorage.setItem("user-login",JSON.stringify(result))
        history.push("/users")
    }

    return (
        <div className="container">
            <Container>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <h1 className="text-center">LOGIN PAGE</h1>
                        <br/>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Email : eve.holt@reqres.in" onChange={(e)=>setEmail(e.target.value)}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password : cityslicka" onChange={(e)=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <br/>
                            <Button onClick={login}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
            
        </div>



    )
}

export default Login;