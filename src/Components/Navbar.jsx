import React from 'react'

function Navbar() {
  return (

    <nav className="bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href='-' className="flex items-center space-x-3 rtl:space-x-reverse">
            
            <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-300 ">Sukuna <span className='text-red-700 '>Loves</span>  Megumi</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <li>
              <a href="#" className="block py-2 px-3 text-blue-500  outline-double" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3">About</a>
            </li>
           
            <li>
              <a href="#" className="block py-2 px-3">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar