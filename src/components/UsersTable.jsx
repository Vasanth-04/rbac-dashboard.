import React from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'

const UsersTable = ({ users, deleteUser, handleEditUser }) => {
    return (
        <div className="overflow-x-auto mt-6 bg-gray-100 p-4 rounded-lg shadow-lg">
            <Table className="min-w-full">
                <TableHead className=" text-white">
                    <TableRow>
                        <TableCell className="text-sm font-medium border border-gray-300">
                            Name
                        </TableCell>
                        <TableCell className="text-sm font-medium border border-gray-300">
                            Email
                        </TableCell>
                        <TableCell className="text-sm font-medium border border-gray-300">
                            Role
                        </TableCell>
                        <TableCell className="text-sm font-medium border border-gray-300">
                            Status
                        </TableCell>
                        <TableCell className="text-sm font-medium border border-gray-300">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            className="transition duration-300 ease-in-out hover:bg-purple-100 border border-gray-300"
                        >
                            <TableCell className="text-sm py-2">
                                {user.name}
                            </TableCell>
                            <TableCell className="text-sm py-2">
                                {user.email}
                            </TableCell>
                            <TableCell className="text-sm py-2">
                                {user.role}
                            </TableCell>
                            <TableCell className="text-sm py-2">
                                {user.status}
                            </TableCell>
                            <TableCell className="text-sm py-2">
                                <div className="flex items-center justify-center gap-2 flex-wrap">
                                    {/* Edit Button */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEditUser(user)}
                                        className="flex items-center"
                                    >
                                        <EditIcon fontSize="small" />
                                    </Button>

                                    {/* Delete Button (Admin only) */}
                                    {user.role === 'Admin' && (
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => deleteUser(user.id)}
                                            className="flex items-center"
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </Button>
                                    )}

                                    {/* Read Button */}
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => {}}
                                        className="flex items-center"
                                    >
                                        <VisibilityIcon fontSize="small" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default UsersTable
