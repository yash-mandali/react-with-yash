import React from 'react';



function Card({username="visit now", name="don"}) {
    return (
        
            <div className=" max-w-xs rounded-md shadow-md bg-black text-gray-100">
                <img
                    src="./src/image.png"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8 mb-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                            soluta amet corporis accusantium aliquid consectetur eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-gray-200"
                    >
                        {username}  
                    </button>
                </div>
            </div>
       
    );
}

export default Card;