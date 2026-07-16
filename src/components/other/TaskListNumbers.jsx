import React from 'react'

const TaskListNumbers = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#111111] gap-5 px-9">
        <div className="bg-blue-500 rounded-xl p-6">
          <h2 className="text-4xl sm:text-5xl font-bold">0</h2>
          <p className="text-lg sm:text-xl mt-3">New Task</p>
        </div>

        <div className="bg-lime-500 rounded-xl p-6">
          <h2 className="text-4xl sm:text-5xl font-bold">3</h2>
          <p className="text-lg sm:text-xl mt-3">Completed</p>
        </div>

        <div className="bg-yellow-400 text-black rounded-xl p-6">
          <h2 className="text-4xl sm:text-5xl font-bold">0</h2>
          <p className="text-lg sm:text-xl mt-3">Accepted</p>
        </div>

        <div className="bg-orange-500 rounded-xl p-6">
          <h2 className="text-4xl sm:text-5xl font-bold">1</h2>
          <p className="text-lg sm:text-xl mt-3">Failed</p>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumbers
