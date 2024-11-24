import React, { useState } from 'react'
import RoleForm from '../components/RoleForm'

const RolesPage = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin', permissions: ['read', 'write', 'delete'] },
        { id: 2, name: 'User', permissions: ['read', 'write'] },
    ])

    const [newRole, setNewRole] = useState({
        name: '',
        permissions: [],
    })

    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [editingRoleId, setEditingRoleId] = useState(null) // Track which role is being edited

    const validateRole = () => {
        const errors = {}
        if (!newRole.name) {
            errors.name = 'Role name is required'
        }
        if (newRole.permissions.length === 0) {
            errors.permissions = 'At least one permission must be selected'
        }
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    // Function to handle role addition and updates
    const handleAddOrUpdateRole = () => {
        if (!validateRole()) {
            setErrorMessage('Please fix the errors and try again')
            return
        }

        try {
            if (editingRoleId) {
                // Update an existing role
                const updatedRoles = roles.map((role) =>
                    role.id === editingRoleId ? { ...role, ...newRole } : role
                )
                setRoles(updatedRoles)
                setEditingRoleId(null) // Reset editing state
            } else {
                // Add a new role
                const newRoleWithId = { ...newRole, id: Date.now() }
                setRoles([...roles, newRoleWithId])
            }
            setNewRole({ name: '', permissions: [] })
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('An error occurred while adding/updating the role.')
        }
    }

    // Function to handle role editing
    const handleEditRole = (role) => {
        setEditingRoleId(role.id)
        setNewRole({ name: role.name, permissions: role.permissions })
    }

    // Function to handle role deletion
    const handleDeleteRole = (roleId) => {
        try {
            const updatedRoles = roles.filter((role) => role.id !== roleId)
            setRoles(updatedRoles)
        } catch (error) {
            setErrorMessage('An error occurred while deleting the role.')
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Roles Management
            </h2>

            {/* Role Form */}
            <RoleForm
                newRole={newRole}
                setNewRole={setNewRole}
                errors={errors}
                errorMessage={errorMessage}
                handleAddOrUpdateRole={handleAddOrUpdateRole}
            />

            {/* Display the current roles */}
            <div className="roles-list mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Existing Roles
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-blue-50 transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-gray-800">
                                    <strong>{role.name}</strong>
                                </span>
                                <p className="text-gray-600 mt-2">
                                    Permissions:{' '}
                                    <span>
                                        {role.permissions.length > 0
                                            ? role.permissions.join(', ')
                                            : 'None'}
                                    </span>
                                </p>
                            </div>

                            {/* Edit and Delete Buttons */}
                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                                    onClick={() => handleEditRole(role)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                                    onClick={() => handleDeleteRole(role.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RolesPage
