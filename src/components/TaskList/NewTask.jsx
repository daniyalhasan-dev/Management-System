import React from 'react'

const NewTask = () => {
  return (
    <div className="bg-lime-500 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <span className="bg-red-500 text-xs px-3 py-1 rounded-md font-medium">
                High
              </span>

              <p className="font-semibold text-sm">20 Feb 2024</p>
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Example Task
            </h3>

            <p className="mt-2 text-sm opacity-90">
              Example aisa kahi nahi dekha hoga jaisa.
            </p>
            <div className='mt-4'>
                <button>Accept Task</button>
            </div>
          </div>
  )
}

export default NewTask
