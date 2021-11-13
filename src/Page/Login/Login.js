import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import profiling from '../../Image/profiling.png';

function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-login')) {
            history.push("/users")
        }
    }, [])

    async function login(){
        let item = { email, password };
        let response = await fetch("https://reqres.in/api/login", {
            method: 'POST', 
            headers: {
                "Content-Type" : "application/json",
                "Accept" : 'application/json'
            },
            body: JSON.stringify(item)
        });

        if (response.status === 200) {
            history.push("/users")
        }
    
        else{
            history.push("/404")
        }
    }
        
    return (
        <Container>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <img src={ profiling } className="image" alt="Profiling"/>
                    <h2 className="text-center">Welcome,</h2>
                    <h5 className="text-center">Please login</h5>
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
                        <div className="d-grid">
                            <Button variant="info" cl onClick={login}>Login</Button>
                        </div> 
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;