import React from 'react'

function ErrorPage() {
  return (
    // <div>
    //   <h1>This is Error 404</h1>
    // </div>
    <div className="min-h-screen flex items-center justify-center m-4">
      <div className="max-w-md ">
        <img
          src="https://illustrations.popsy.co/amber/crashed-error.svg"
          alt="Error Illustration"
          className="mb-8 mx-auto"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ErrorPage;
