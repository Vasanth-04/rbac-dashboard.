import React from 'react'
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material'

const RoleForm = ({
    newRole,
    setNewRole,
    errors,
    errorMessage,
    handleAddOrUpdateRole,
}) => {
    // Handle permission checkbox changes
    const handlePermissionChange = (event) => {
        const { name, checked } = event.target
        setNewRole((prevRole) => ({
            ...prevRole,
            permissions: checked
                ? [...prevRole.permissions, name] // Add permission if checked
                : prevRole.permissions.filter(
                      (permission) => permission !== name
                  ), // Remove permission if unchecked
        }))
    }

    return (
        <div className="role-form bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-6 transform transition-all duration-500 ease-in-out hover:scale-105">
            {/* Error Message Display */}
            {errorMessage && (
                <div className="text-red-500 text-sm mb-4 animate__animated animate__fadeIn">
                    {errorMessage}
                </div>
            )}

            <TextField
                label="Role Name"
                variant="outlined"
                value={newRole.name}
                onChange={(e) =>
                    setNewRole({ ...newRole, name: e.target.value })
                }
                fullWidth
                className="mb-4 transition duration-300 ease-in-out transform hover:scale-105"
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                    className: 'focus:ring-2 focus:ring-blue-500', // Custom focus ring
                }}
            />

            {/* Permissions Section */}
            <div className="permissions-section mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={newRole.permissions.includes('read')}
                            onChange={handlePermissionChange}
                            name="read"
                            className="transition transform duration-300 ease-in-out hover:scale-110"
                        />
                    }
                    label="Read"
                    className="text-lg font-medium text-gray-700"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={newRole.permissions.includes('write')}
                            onChange={handlePermissionChange}
                            name="write"
                            className="transition transform duration-300 ease-in-out hover:scale-110"
                        />
                    }
                    label="Write"
                    className="text-lg font-medium text-gray-700"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={newRole.permissions.includes('delete')}
                            onChange={handlePermissionChange}
                            name="delete"
                            className="transition transform duration-300 ease-in-out hover:scale-110"
                        />
                    }
                    label="Delete"
                    className="text-lg font-medium text-gray-700"
                />
            </div>

            {/* Permission Error */}
            {errors.permissions && (
                <div className="text-red-500 text-sm mb-4 animate__animated animate__fadeIn">
                    {errors.permissions}
                </div>
            )}

            {/* Submit Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddOrUpdateRole}
                className="w-full mt-4 py-2 text-white font-bold text-lg transition-all duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-105"
            >
                {newRole.name ? 'Update Role' : 'Add Role'}
            </Button>
        </div>
    )
}

export default RoleForm
