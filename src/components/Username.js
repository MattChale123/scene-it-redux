import { Button, Form } from 'react-bootstrap'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import '../App.css';
import { setName } from '../redux/action';

export default function Username() {
    const dispatch = useDispatch()
    const username = useSelector(state => state.userName)
    const changeName = () => dispatch(setName())


    const handlingSubmit = () => {
        
    }
    
    return (
        <div className='main'>
            <Form className='usernameForm' onSubmit={handlingSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label><br />
                    <Form.Control type="text" placeholder="Enter username" /><br />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}