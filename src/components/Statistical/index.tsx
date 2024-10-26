import TaskArea from "components/TaskArea";
import { useMemo } from "react";

const Statistical = () => {
  const daysArray = useMemo(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const maxDay = new Date(year, month + 1, 0).getDate();
    const firstDayOffset = new Date(year, month, 1).getDay();

    return [
      ...["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      ...new Array(firstDayOffset).fill(null),
      ...Array.from({ length: maxDay }, (_, index) => index + 1),
    ];
  }, []);

  return (
    <TaskArea title='Thống kê' id='3'>
      <div className='grid grid-cols-7 gap-0.5'>
        {daysArray.map((x, i) => (
          <div
            key={i}
            className='border border-[#59C0DF] p-1 bg-white flex items-end justify-between'
          >
            {x}
            {!!x && typeof x === "number" && (
              <div className='flex gap-px h-full items-end'>
                <div
                  className='bg-[#ADD8E6] w-0.5'
                  style={{ height: `${Math.floor(Math.random() * 101)}%` }}
                ></div>
                <div
                  className='bg-[#87CEEB] w-0.5'
                  style={{ height: `${Math.floor(Math.random() * 101)}%` }}
                ></div>
                <div
                  className='bg-[#00BFFF] w-0.5'
                  style={{ height: `${Math.floor(Math.random() * 101)}%` }}
                ></div>
                <div
                  className='bg-[#FFA07A] w-0.5'
                  style={{ height: `${Math.floor(Math.random() * 101)}%` }}
                ></div>
                <div
                  className='bg-[#FF6347] w-0.5'
                  style={{ height: `${Math.floor(Math.random() * 101)}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </TaskArea>
  );
};

export default Statistical;
