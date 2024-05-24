
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const UserSign = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://ecommerce-g1tg.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
            });

            const responseData = await response.json();

            console.log('Response Data:', responseData); // Log the entire response data to check its structure

            if (!response.ok) {
                console.error('Response Error Data:', responseData);
                throw new Error(responseData.error || 'Signup failed');
            }

            // Check if the token exists in the response data
            const token = responseData.token;
            if (token) {
                console.log('Token:', token); // Log the token
                setMessage('Signup successful!');
                navigate('/User-Details');  // Navigate to User-Details on successful signup
            } else {
                console.error('Token is missing in the response');
                setMessage('Signup succeeded but no token received. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setMessage(error.message || 'Signup failed. Please try again.');
        }
    };

    return (
        <Container className="sign-in-container">
            <Row className="justify-content-center">
                <Col md="6">
                    <h2 className="sign-in-title text-center">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <Button color="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    {message && <p className="mt-3 text-center">{message}</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default UserSign;


