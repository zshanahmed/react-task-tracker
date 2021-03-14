import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState} from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th 2021, 6:00pm',
      reminder: true,
    }
  ]
  )

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
 </div>
  );
}

export default App;
