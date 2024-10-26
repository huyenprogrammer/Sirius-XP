import { IDaily, IDailyTodos } from "constants/types";
import { useLocalStorage } from "usehooks-ts";

const getColor = (level: number, isComplete: boolean) => {
  if (isComplete) {
    return "#878190";
  }
  switch (level) {
    case 1:
      return "#ADD8E6";
    case 2:
      return "#87CEEB";
    case 3:
      return "#00BFFF";
    case 4:
      return "#FFA07A";
    case 5:
      return "#FF6347";
  }
};

export const Task = (
  props: IDailyTodos & {
    isComplete: boolean;
  }
) => {
  const { id, todo, isComplete, level } = props;

  const [daily, setDaily] = useLocalStorage<IDaily[]>("daily", []);

  const handleCheck = (id: number, isDone: boolean) => {
    setDaily(
      isDone
        ? daily.filter((x) => x.id !== id)
        : [...daily, { id, completedDate: new Date() }]
    );
  };

  return (
    <div className='flex rounded overflow-hidden mb-0.5 touch-none relative'>
      <div className='bg-white w-full p-3 pb-6'>{todo}</div>
      <div
        className='px-1.5 py-4 absolute top-0 bottom-0 right-0 z-50'
        style={{ background: getColor(level, isComplete) }}
      >
        <div
          className='h-7 w-7 bg-white opacity-50 rounded-sm cursor-pointer flex items-center justify-center group lg:hover:opacity-100 outline-none'
          onClick={() => handleCheck(id, isComplete)}
        >
          {isComplete ? (
            <i className='fa-solid fa-check opacity-100'></i>
          ) : (
            <i className='fa-solid fa-check opacity-0 lg:group-hover:opacity-100  '></i>
          )}
        </div>
      </div>
    </div>
  );
};
