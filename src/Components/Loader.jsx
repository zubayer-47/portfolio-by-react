import React from 'react'

export default function Loader() {
   return (
      <div className="bg-gray-900 h-screen w-full select-none flex justify-center items-center text-white ">
         <div className="my-4 w-4/6 mx-auto bg-gray-800 h-8 rounded-full flex justify-between px-5 items-center animate-pulse">
            <span className="ring-2 ring-red-400 w-4 h-4 bg-gray-800 rounded-full"></span>
            <div className="flex justify-center items-center gap-3">
               <span className="flex ring-2 ring-green-400 w-4 h-4 bg-gray-800 rounded-full"></span>
               <span className="ring-2 ring-green-400 w-4 h-4 bg-gray-800 rounded-full"></span>
               <span className="ring-2 ring-green-400 w-4 h-4 bg-gray-800 rounded-full"></span>
            </div>
            <span className="ring-2 ring-red-400 w-4 h-4 bg-gray-800 rounded-full"></span>
         </div>
      </div>
   )
}
