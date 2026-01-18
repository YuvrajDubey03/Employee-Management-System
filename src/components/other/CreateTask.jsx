import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    // ✅ Copy employees array
    const data = [...userData];

    data.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(taskObj); // ✅ push taskObj
        elem.taskNumbers.newTask += 1;
        elem.taskNumbers.total += 1;
      }
    });

    // ✅ Context state update (MUST BE ARRAY)
    setUserData(data);

    // ✅ localstorage update
    localStorage.setItem("employees", JSON.stringify(data));

    // reset inputs
    setAssignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="w-full bg-[#0b0f10] p-6">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-6xl mx-auto bg-[#0f1416] border border-[#1f2a2e] rounded-xl p-6 flex gap-10"
      >
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm font-medium">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-transparent border border-[#2a3a3f] rounded-md px-3 py-2 text-white placeholder:text-gray-500 outline-none focus:border-[#4cc38a]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm font-medium">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full bg-transparent border border-[#2a3a3f] rounded-md px-3 py-2 text-gray-300 outline-none focus:border-[#4cc38a]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm font-medium">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="employee name"
              className="w-full bg-transparent border border-[#2a3a3f] rounded-md px-3 py-2 text-white placeholder:text-gray-500 outline-none focus:border-[#4cc38a]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm font-medium">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="w-full bg-transparent border border-[#2a3a3f] rounded-md px-3 py-2 text-white placeholder:text-gray-500 outline-none focus:border-[#4cc38a]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex flex-col gap-4">
          <h3 className="text-white text-sm font-medium">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 bg-transparent border border-[#2a3a3f] rounded-md px-3 py-2 text-white outline-none resize-none focus:border-[#4cc38a]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#4cc38a] text-white font-semibold py-3 rounded-md hover:bg-[#43b47f] active:scale-[0.99] transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
