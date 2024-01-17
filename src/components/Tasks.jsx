import { useState } from 'react';
import NewTask from './NewTask.jsx';

export default function Tasks({onAddTask, onDeleteTask, tasks}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) =>
            <li key={task.id} className="flex items-center justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task)}>Remove task</button>
            </li>
          )}
        </ul>
        ) :
          <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
      }
    </section>
  );
}