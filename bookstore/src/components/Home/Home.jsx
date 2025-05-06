import React from 'react';
import { Link } from 'react-router-dom'
import { ThemeProvider } from '../../contexts/theme';


export default function Home() {


    return (
        // <ThemeProvider value={{ themeMode, lightTheme, darkTheme }} >
            <div className=" dark:bg-gray-700">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-5xl dark:text-white">
                            Download Now
                                <span className="hidden sm:block text-3xl dark:text-white font-normal">Booknest</span>
                        </h2>

                        <Link
                            onClick={() => {
                                print()
                                
                            }}
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 "
                            to="/"
                        >
                            <svg
                                fill="black"
                                width="24"
                                height="24"
                                xmlns=""
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now

                        </Link>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12">
                    <img className="sm:w-96 rounded-4xl transition-transform duration-300 ease-in-out transform hover:scale-110 " src="https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className=" sm:w-96 w-48 rounded-4xl transition-transform duration-600 ease-in-out transform hover:scale-105" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/best-game-of-thrones-books-game-of-thrones-and-philosophy.png" alt="image2" />
            </div>

                <h1 className="text-center text-2xl sm:text-5xl dark:text-white py-10 font-medium">$9.99</h1>


            </div>
        // </ThemeProvider>
    );
}
