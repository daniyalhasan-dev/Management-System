import React from 'react'

const FailedTask = () => {
  return (
    <div className="bg-orange-500 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <span className="bg-red-500 text-xs px-3 py-1 rounded-md font-medium">
                High
              </span>

              <p className="font-semibold text-sm">20 Feb 2024</p>
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Ek aur task
            </h3>

            <p className="mt-2 text-sm opacity-90">
              Task jaisa kabhi nahi dekha hoga waisa.
            </p>
            <div className='mt-2'>
            <button className='w-full'>Failed</button>
            </div>
          </div>
  )
}

export default FailedTask
