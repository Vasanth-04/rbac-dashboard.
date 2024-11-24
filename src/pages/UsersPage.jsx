import React, { useState } from 'react'
import UsersTable from '../components/UsersTable'
import {
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material'

const UsersPage = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Vasanth',
            email: 'Vasanth3256@gmail.com',
            role: 'Admin',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Udhaya',
            email: 'udhaya@gmail.com',
            role: 'Editor',
            status: 'Inactive',
        },
    ])
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: '',
        status: '',
    })
    const [isEditing, setIsEditing] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const roles = ['Admin', 'User']

    // Validate form inputs
    const validateInputs = () => {
        const errors = {}
        if (!newUser.name) {
            errors.name = 'Name is required'
        }
        if (!newUser.email || !/\S+@\S+\.\S+/.test(newUser.email)) {
            errors.email = 'Please enter a valid email'
        }
        if (!newUser.role) {
            errors.role = 'Role is required'
        }
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    // Add a new user
    const handleAddUser = () => {
        if (!validateInputs()) {
            setErrorMessage('Please fill out all required fields correctly')
            return
        }

        const newUserWithId = { ...newUser, id: Date.now() }
        setUsers([...users, newUserWithId])
        setNewUser({ name: '', email: '', role: '', status: 'Active' })
        setErrorMessage('')
    }

    // Edit an existing user
    const handleEditUser = (user) => {
        setIsEditing(true)
        setEditingUser(user)
        setNewUser({
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
        })
    }

    // Update the user information
    const handleUpdateUser = () => {
        if (!validateInputs()) {
            setErrorMessage('Please fill out all required fields correctly')
            return
        }

        const updatedUser = { ...editingUser, ...newUser }
        setUsers(
            users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        )
        setIsEditing(false)
        setNewUser({ name: '', email: '', role: '', status: 'Active' })
        setErrorMessage('')
    }

    // Cancel editing the user
    const handleCancelEdit = () => {
        setIsEditing(false)
        setNewUser({ name: '', email: '', role: '', status: 'Active' })
    }

    // Delete a user
    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">User Management</h2>
            <div className="mb-6">
                <h3 className="text-xl font-bold text-center mb-4">
                    {isEditing ? 'Edit User' : 'Add User'}
                </h3>

                {errorMessage && (
                    <div className="text-red-500 mb-4 text-center">
                        {errorMessage}
                    </div>
                )}

                <div className="space-y-6 max-w-6xl mx-auto h-full p-6 rounded-lg shadow-lg">
                    {/* Form Container with Gradient Background */}
                    <div
                        style={{
                            backgroundImage:
                                'radial-gradient(circle 382px at 50% 50.2%, rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2%)',
                        }}
                        className="p-6 flex flex-col gap-6 backdrop-blur-sm border border-white/30 rounded-lg"
                    >
                        {/* Name Input */}
                        <div className="mb-6">
                            <label
                                className="block text-white font-semibold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={newUser.name}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Enter your name"
                                className="w-full p-3 rounded bg-white bg-opacity-80 text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Input */}
                        <div className="mb-6">
                            <label
                                className="block text-white font-semibold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={newUser.email}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        email: e.target.value,
                                    })
                                }
                                placeholder="Enter your email"
                                className="w-full p-3 rounded bg-white bg-opacity-80 text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Role Dropdown */}
                        <div className="mb-6">
                            <label
                                className="block text-white font-semibold mb-2"
                                htmlFor="role"
                            >
                                Role
                            </label>
                            <select
                                id="role"
                                value={newUser.role}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        role: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded bg-white bg-opacity-80 text-black focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
                            >
                                <option value="" disabled>
                                    Select a role
                                </option>
                                {roles.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.role}
                                </p>
                            )}
                        </div>

                        {/* Status Dropdown */}
                        <div className="mb-6">
                            <label
                                className="block text-white font-semibold mb-2"
                                htmlFor="status"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                value={newUser.status} // This will be an empty string initially
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        status: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded bg-white bg-opacity-80 text-black focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm"
                            >
                                <option value="" disabled>
                                    Select a Status
                                </option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Add Role Button */}

                        <div className="flex flex-col gap-4 mt-6">
                            <Button
                                variant="contained"
                                onClick={
                                    isEditing ? handleUpdateUser : handleAddUser
                                }
                                className="btn-grad w-full"
                            >
                                {isEditing ? 'Update User' : 'Add User'}
                            </Button>
                            {isEditing && (
                                <Button
                                    variant="contained"
                                    onClick={handleCancelEdit}
                                    className="btn-grad w-full"
                                >
                                    Cancel
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <UsersTable
                users={users}
                handleEditUser={handleEditUser}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default UsersPage
