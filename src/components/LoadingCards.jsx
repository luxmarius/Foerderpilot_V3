import React from "react";

export default function LoadingCard() {
    return (
        <div className="loading-card card bg-white shadow-md p-4 opacity-70 mb-1" style={{ width: '175px' }}>
            <div className="flex flex-col space-y-3">
                <div className="skeleton w-full h-2 bg-gray-200"></div>
                <div className="skeleton w-full h-2 bg-gray-200"></div>
                <div className="skeleton w-full h-2 bg-gray-200"></div>
                <div></div>
                <div className="skeleton w-1/2 h-2 bg-gray-200"></div>
                <div className="skeleton w-1/2 h-2 bg-gray-200"></div>
                <div className="skeleton w-1/2 h-2 bg-gray-200"></div>
            </div>
                <div className="flex items-center space-x-4 mt-6">
                        <div className="skeleton h-10 w-full"></div>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
        </div>
    );
}
