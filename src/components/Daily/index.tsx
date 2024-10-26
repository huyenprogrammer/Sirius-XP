import AddTaskButton from "components/AddTaskButton";
import { Task } from "components/Task";
import TaskArea from "components/TaskArea";
import { IDaily, IDailyTodos } from "constants/types";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Daily = () => {
  const [daily] = useLocalStorage<IDaily[]>("daily", []);
  const [dailyTodos, setDailyTodos] = useLocalStorage<IDailyTodos[]>(
    "dailyTodos",
    []
  );

  const [dailyToday, setDailyToday] = useState<
    (IDailyTodos & { isComplete: boolean })[]
  >([]);

  const handleAddDaily = (newTask: string, level: number) => {
    const id = Math.max(...dailyTodos.map((item) => item.id)) + 1;
    setDailyTodos([...dailyTodos, { id, todo: newTask, level }]);
  };

  useEffect(() => {
    setDailyToday([
      ...dailyTodos.map((dailyTodo) => ({
        ...dailyTodo,
        isComplete: Boolean(daily.find((x) => x.id === dailyTodo.id)),
      })),
    ]);
  }, [daily, dailyTodos]);

  return (
    <TaskArea title='Hàng ngày' id='0'>
      <AddTaskButton onAdd={handleAddDaily} />

      <div className=' h-task-mobile lg:h-task-destop  '>
        {dailyToday.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </TaskArea>
  );
};

export default Daily;
