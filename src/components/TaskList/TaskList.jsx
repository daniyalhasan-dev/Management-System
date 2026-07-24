import React from 'react'

const TaskList = ({data}) => {
  return (
    <div>
      <div className="min-h-screen bg-[#111111] text-white p-8">
        {/* Tasks Heading */}
        <p className="text-lg text-gray-300">Your</p>
        <h1 className="text-4xl font-bold pb-8">Tasks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Task 1 */}
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
          </div>

          {/* Task 2 */}
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
          </div>

          {/* Task 3 */}
          <div className="bg-blue-500 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <span className="bg-red-500 text-xs px-3 py-1 rounded-md font-medium">
                High
              </span>

              <p className="font-semibold text-sm">8 Feb 2024</p>
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Client Meeting
            </h3>

            <p className="mt-2 text-sm opacity-90">
              Meeting with client regarding the project.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TaskList
