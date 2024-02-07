import { useState } from 'react'
import Navbar from './Components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container'>
        <video autoPlay loop muted playsInline className="video">
          <source src="src/assets/VideoBG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='content flex justify-center' >

          <section className="py-10 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto w-full text-center md:max-w-2xl">
                <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">
                  Welcome  to our website!
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300">
                  <span className='text-red-600 font-bold' >
                    SPOILER!! 	&nbsp;	&nbsp;
                  </span>
                Sukuna takes over Megumi's body by breaking the binding vow with Yuji, forcefully cutting his finger, and inflicting pain on Tsumiki, Megumi's sister, to break Megumi's soul and gain full control.
                </p>
              </div>
              <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      type="email"
                      placeholder="Email"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4 text-gray-600"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="ml-2 text-sm text-gray-400">
                  Your data is complely secured with us. We don&#x27;t share with anyone.
                </span>
              </div>
            </div>
          </section>
        </div>


      </div>
    </>
  )
}

export default App
