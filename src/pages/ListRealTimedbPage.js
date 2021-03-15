import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'

import { database as db } from '../services/firebase.config'

export default function ListRealTimedbPage() {
    const [todos, setTodos] = useState([])

    const fetch = async () => {
        const data = await db.ref('/Todos').get()
        
        const temp = []
        for (const [key, value] of Object.entries(data.val())) {
            temp.push({
                number: value.number,
                todo: value.todo, 
                date: value.date
            })
        }
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
