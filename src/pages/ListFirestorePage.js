import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'

import { firestore as db } from '../services/firebase.config'

export default function ListFirestorePage() {
    const [todos, setTodos] = useState([])

    const fetch = async () => {
        const data = await db.collection('Todos').get()

        const temp = []
        data.docs.forEach((item) => {
            temp.push({
                number: item.data().number,
                todo: item.data().todo, 
                date: item.data().date
            })
        })
        setTodos(temp)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <Container>
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
            </Container>
        </div>
    )
}
