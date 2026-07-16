import React from 'react'

const CreateTask = () => {
  return (
    <div className="bg-[#111111] p-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

    {/* LEFT SIDE */}
    <div className="flex flex-col justify-between">
      <div className="space-y-5">
        <div>
          <label className="block mb-2 text-gray-300 font-medium">
            Task Title
          </label>

          <input
            type="text"
            placeholder="Make a UI Design"
            className="w-full placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-md px-4 py-2 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300 font-medium">
            Date
          </label>

          <input
            type="date"
            className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 outline-none focus:border-emerald-500 text-gray-400 focus:text-white"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300 font-medium">
            Assign To
          </label>

          <input
            type="text"
            placeholder="Employee Name"
            className="w-full placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-md px-4 py-2 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300 font-medium">
            Category
          </label>

          <input
            type="text"
            placeholder="Design, Dev, etc"
            className="w-full placeholder:text-gray-400 bg-transparent border border-gray-500 rounded-md px-4 py-2 outline-none focus:border-emerald-500"
          />
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col h-full">
      <label className="block mb-2 text-gray-300 font-medium">
        Description
      </label>

      <textarea
        placeholder="Detailed description of task (Max 500 words)"
        className="flex-1 placeholder:text-gray-400 resize-none bg-transparent border border-gray-500 rounded-md p-4 outline-none focus:border-emerald-500"
      />

      <button className="mt-5 bg-emerald-500 hover:bg-emerald-600 py-3 rounded-md font-semibold transition">
        Create Task
      </button>
    </div>

  </div>
</div>
  )
}

export default CreateTask
