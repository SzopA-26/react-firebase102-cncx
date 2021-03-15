import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

// import { database as db } from '../services/firebase.config'
import { firestore as db } from '../services/firebase.config'

export default function HomePage() {
    const [input, setInput] = useState('')
    const [date, setDate] = useState('')
    const [todos, setTodos] = useState([])
    const [number, setNumber] = useState(1)

    const handleInputOnChange = (e) => {
        setInput(e.target.value)
    }

    const handleDateOnChange = (e) => {
        setDate(e.target.value)
    }

    const handleBtnSubmitOnClick = (e) => {
        e.preventDefault();
        const temp = []
        todos.map((key) => {
            temp.push({
                number: key.number,
                todo: key.todo, 
                date: key.date
            })
        })
        temp.push({
            number: number, 
            todo: input, 
            date: date
        })
        setTodos(temp)
        setNumber(number+1)

        // REALTIME DATABASE
        // db.ref("/Todos").push({
        //     number: number, 
        //     todo: input, 
        //     date: date
        // })

        // FIRESTORE
        db.collection('Todos').add({
            number: number, 
            todo: input, 
            date: date
        })
    }

    return (
        <div>
            <Container>
            <Form>
                <Row>
                <Col xs={3}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" placeholder="Enter Activity" onChange={handleInputOnChange}/>
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" onChange={handleDateOnChange}/>
                    </Form.Group>
                </Col>
                </Row>
                <Button variant="primary" type="submit" onClick={handleBtnSubmitOnClick}>
                    Submit
                </Button>
            </Form>

            <br/>

            <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Activity</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((key, index) => {
                            return (
                                <tr key={key}>
                                    <td>{key.number}</td>
                                    <td>{key.todo}</td>
                                    <td>{key.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </Row>

            </Container>
        </div>
    )
}
