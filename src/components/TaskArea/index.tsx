interface IProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const TaskArea = (props: IProps) => {
  const { title, children, id } = props;

  return (
    <div
      className='h-content-mobile lg:h-content-destop p-3 pb-6 grid gap-2 relative'
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <div className='absolute -top-[60px]' id={id}></div>

      <div className='font-bold text-xl'>{title}</div>

      <div className='p-2 bg-[#edecee] rounded'>{children}</div>
    </div>
  );
};

export default TaskArea;
