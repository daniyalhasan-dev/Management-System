import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div>
      <div className="min-h-screen bg-[#111111] text-white p-8">
        {/* Tasks Heading */}
        <p className="text-lg text-gray-300">Your</p>
        <h1 className="text-4xl font-bold pb-8">Tasks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.tasks.map((elem)=>{

            if (elem.active) {
              return <AcceptTask />
            }
            if (elem.newTask) {
              return <NewTask />
            }
            if (elem.completed) {
              return <CompleteTask />
            }
            if (elem.failed) {
              return <FailedTask />
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default TaskList
