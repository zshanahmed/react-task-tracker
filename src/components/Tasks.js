import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.length > 0 ? tasks.map((task) => (
                <Task key={task.id} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
                />
                )) : ('No tasks to show today')
            }
        </>
    )
}

export default Tasks
