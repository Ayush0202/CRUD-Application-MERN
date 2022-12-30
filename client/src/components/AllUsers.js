import { useEffect, useState } from 'react'

import { Table, TableHead, TableBody, TableCell, TableRow, styled, Button } from '@mui/material'

import { getUsers, deleteUser } from '../service/api'

import { Link } from 'react-router-dom'

const Container = styled(Table)`
    width: 70%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background: #111111;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 15px
    }
`

const AllUsers = () => {

    const  [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers()
        setUsers(response.data)
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
        getAllUsers()
    }

    return(
        <Container>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Usename</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </Container>
    )
}

export default AllUsers