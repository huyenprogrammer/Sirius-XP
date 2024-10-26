import AddTaskButton from "components/AddTaskButton";
import TaskArea from "components/TaskArea";

const Plan = () => {
  const handleAddPlan = (newTask: string, level: number) => {
    console.log(newTask);
    console.log(level);
  };

  return (
    <TaskArea title='Kế hoạch' id='2'>
      <AddTaskButton onAdd={handleAddPlan} />
    </TaskArea>
  );
};

export default Plan;
