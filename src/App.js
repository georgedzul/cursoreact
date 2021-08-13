import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
  {
    id:1,
    text:'Cita con el Doctor',
    day: '25 de Agosto 2021',
    reminder: true
  },
  {
    id:2,
    text:'Videoconferencia ITA',
    day: '3 de Septiembre 2021',
    reminder: false
  },
  {
    id:3,
    text:'Entrega de Avance de Proyecto',
    day: '15 de Agosto 2021',
    reminder: true
    }
  ])

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) =>{
      setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder} : task))
  }

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Header title='Recordatorios' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
