import { useState } from 'react';

export default function NewTask({onAddTask}) {
  const [enteredTask, setEnteredTask] = useState();
  function handleInputChange(event) {
    setEnteredTask(event.target.value);
  }
  
  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask('');
  }
  
  return (
    <div className="flex items-center gap-4">
      <input onChange={(e) => handleInputChange(e)} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask} />
      <button onClick={handleClick} className="text-stone-300 bg-stone-800 rounded-md py-2 px-3 hover:text-stone-800 hover:bg-stone-300">Add task</button>
    </div>
  );
}