import React, { useState } from 'react';

export default function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClose = () => {
        setIsExpanded(false);
    };

    return (
        <>
            {isExpanded && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                     onClick={handleClose}>
                    <div className="bg-white p-5 rounded-lg w-full max-w-md mx-auto relative"
                         onClick={(e) => e.stopPropagation()}>
                        <img src={props.logo} alt="Logo" className="w-full rounded-lg mb-4" />
                        <div className="space-y-2">
                            <h1 className="text-sm font-semibold text-gray-800">{props.title}</h1>
                            <div className="text-xs font-bold">{props.badgeContent}</div>
                            <span className="text-xs text-gray-600">{props.county}</span>
                            <span className="text-lg font-bold text-gray-800">{props.volume} EUR</span>
                            <div className="flex space-x-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex-grow">More</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 flex-grow">Save</button>
                            </div>
                        </div>
                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white p-4 rounded-lg w-44 text-xs shadow-md cursor-pointer mb-1"
                 onClick={() => setIsExpanded(true)}>
                <div className="flex flex-col">
                <h6 className="text-sm font-semibold text-gray-800 break-words text-left">{props.title.slice(0, 50)}{props.title.length > 50 ? '...' : ''}</h6>
                    <span className="text-sm text-gray-600 opacity-80 text-left">{props.county}</span>
                    <span className="text-sm text-gray-600 opacity-80 text-left">{props.volume} EUR</span>
                </div>
                <div className="flex items-center space-x-4 mt-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700  w-full">mehr</button>
                    <img src={props.logo} alt="Logo" className="w-8 rounded-lg opacity-60" />
                </div>
            </div>
        </>
    );
}
