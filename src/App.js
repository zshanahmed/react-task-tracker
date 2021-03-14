import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState} from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th 2021, 6:00pm',
      reminder: true,
    }
  ]
  )

  // Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
 </div>
  );
}

export default App;
