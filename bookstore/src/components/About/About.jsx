import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className='transition-transform duration-500 ease-in-out transform hover:scale-105'
                            src="https://www.freeiconspng.com/thumbs/book-png/book-png-3.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            The book publishing process is the series of steps involved in their creation and dissemination. Books are sold at both regular stores and specialized bookstores, as well as online for delivery, and can be borrowed from libraries. The reception of books has led to a number of social consequences, including censorship.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Book design is the art of incorporating the content, style, format, design, and sequence of the various elements of a book into a coherent unit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}