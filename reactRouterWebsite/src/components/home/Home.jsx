import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-10 mx-2 sm:py-10">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-96 space-y-8 text-center text-gray-800 sm:text-right sm:ml-auto">
                        <h2 className="text-gray-600 text-center px-4 py-6 m-auto sm:text-xl">
                            <span className="hidden sm:block text-4xl text-gray-800 font-bold p-2">React</span>
                            React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. 
                            The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                        </h2>

                        <Link
                            className="inline-flex text-white items-center mr-44 bottom-8 px-6 py-3 font-medium bg-blue-800 rounded-lg hover:opacity-75 "
                            to="https://react.dev/"
                        >
                            <svg 
                                 width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                 class="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex text-white origin-center transition-all ease-in-out">
                                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>  
                                <g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)">
                                    </ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                </g>      
                            </svg>
                            &nbsp; react.dev
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>
            <div className= "text-gray-800 sm:text-right sm:ml-auto">
                <h2 className="text-gray-600 text-center px-4 py-6 ml-6 mt-9 sm:text-xl">
                    <span className="hidden sm:block text-4xl text-gray-800 font-bold p-2">React Components</span>
                    React is a Front end Javascript library, it is not even a framework. React is capable of making API calls 
                    (send the request to the backend), which deals with the data. React cannot deal with the database or any data source itself.
                    <br/><br/>
                    React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. 
                    A component can be as small as a button, or as large as an entire page.
                </h2>
            </div>    

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-3xl text-gray-800 py-10 font-medium">Components Routing</h1>
        </div>
    );
}

