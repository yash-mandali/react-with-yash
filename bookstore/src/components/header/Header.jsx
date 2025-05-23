import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../../contexts/theme';

export default function Header() {


    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    // actual change in theme

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }} >
            <header className="shadow sticky z-50 top-0 dark:bg-gray-800">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl dark:bg-gray-800">
                        <p className='text-2xl cursor-pointer dark:text-white'>📚 BookNest</p>
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="#"
                                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white dark:text-white bg-orange-700 hover:bg-orange-800 focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Get started
                            </Link>

                            <ThemeBtn />

                        </div>
                        <div
                            className="hidden justify-between  dark:text-whiteitems-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 dark:text-white duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to={"/about"}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3  dark:text-white duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to={"/contact"}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 dark:text-white duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to={"/settings"}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 dark:text-white duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Settings
                                    </NavLink>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </ThemeProvider>
    );
}

