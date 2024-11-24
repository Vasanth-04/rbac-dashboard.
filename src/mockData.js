export const permissions = ['Read', 'Write', 'Delete']

export const mockRoles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
]

export const mockUsers = [
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
]
