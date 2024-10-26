import AddTaskButton from "components/AddTaskButton";
import TaskArea from "components/TaskArea";

const Todo = () => {
  const handleAddTodo = (newTask: string, level: number) => {
    console.log(newTask);
    console.log(level);
  };

  return (
    <TaskArea title='Todo' id='1'>
      <AddTaskButton onAdd={handleAddTodo} />
    </TaskArea>
  );
};

export default Todo;
