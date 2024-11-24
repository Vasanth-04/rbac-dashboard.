import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, People, Settings } from '@mui/icons-material' // Import Material UI icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle the menu open/close state
    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <nav
            style={{
                backgroundImage:
                    'radial-gradient( 50% 50.2%, rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2%)',
            }}
            className=" shadow-lg"
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo or Brand Name with Icon */}
                <div className="flex items-center text-white text-xl md:text-3xl font-bold tracking-wide">
                    {/* RBAC Dashboard Icon */}
                    <span className="mr-2">
                        <Settings fontSize="large" />{' '}
                        {/* Add a settings icon */}
                    </span>
                    <span className="sm:inline">RBAC Dashboard</span>
                </div>

                {/* Desktop Menu Links (Visible on Large Screens) */}
                <div className="hidden md:flex space-x-8">
                    {/* Home Link with Icon */}
                    <Link
                        to="/"
                        className="text-white font-medium text-lg transition-colors duration-300 hover:text-yellow-300 hover:underline flex items-center"
                    >
                        <Home fontSize="small" className="mr-2" />
                        Home
                    </Link>

                    {/* Users Link with Icon */}
                    <Link
                        to="/users"
                        className="text-white font-medium text-lg transition-colors duration-300 hover:text-yellow-300 hover:underline flex items-center"
                    >
                        <People fontSize="small" className="mr-2" />
                        Users
                    </Link>

                    {/* Roles Link with Icon */}
                    <Link
                        to="/roles"
                        className="text-white font-medium text-lg transition-colors duration-300 hover:text-yellow-300 hover:underline flex items-center"
                    >
                        <Settings fontSize="small" className="mr-2" />
                        Roles
                    </Link>
                </div>

                {/* Menu Button on Small Screens */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`w-8 h-8 transition-transform duration-300 ${
                                menuOpen ? 'rotate-45' : ''
                            }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links (Below the Navbar) */}
            <div
                className={`${
                    menuOpen ? 'block' : 'hidden'
                } w-full md:hidden flex flex-col items-center bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 py-4 space-y-4`}
            >
                {/* Home Link with Icon */}
                <Link
                    to="/"
                    className="text-white font-medium text-xl transition-colors duration-300 hover:text-yellow-300 hover:underline flex items-center"
                    onClick={() => setMenuOpen(false)} // Close the menu when clicked
                >
                    <Home fontSize="small" className="mr-2" />
                    Home
                </Link>

                {/* Users Link with Icon */}
                <Link
                    to="/users"
                    className="text-white font-medium text-xl transition-colors duration-300 hover:text-yellow-300 hover:underline flex items-center"
                    onClick={() => setMenuOpen(false)} // Close the menu when clicked
                >
                    <People fontSize="small" className="mr-2" />
                    Users
                </Link>

                {/* Roles Link with Icon */}
                <Link
                    to="/roles"
                    className="text-white font-medium text-xl transition-colors duration-300 hover:text-yellow-300 hover:underline flex items-center"
                    onClick={() => setMenuOpen(false)} // Close the menu when clicked
                >
                    <Settings fontSize="small" className="mr-2" />
                    Roles
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
