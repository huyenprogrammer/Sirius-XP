import { KeyboardEvent, useState } from "react";

interface IProps {
  onAdd: (newTask: string, level: number) => void;
}

const AddTaskButton = (props: IProps) => {
  const { onAdd } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(2);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(inputValue, selectedDifficulty);
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficulty(Number(event.target.value));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col items-end mb-2'>
      <input
        value={inputValue}
        className='bg-[#e1dfe2] w-full py-3 px-4 outline-none border focus:border-[#59C0DF] focus:bg-white mb-4 rounded-sm'
        placeholder='Thêm nhiệm vụ mới'
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className='relative'>
        <select
          className='py-2 px-3 rounded-sm outline-none bg-white'
          value={selectedDifficulty}
          onChange={handleChange}
          onClick={toggleDropdown}
        >
          <option value={1}>Dễ</option>
          <option value={2}>Thường</option>
          <option value={3}>Khó</option>
          <option value={4}>Khó S+</option>
          <option value={5}>Khó S++</option>
        </select>

        <div className='absolute right-1 bottom-1/2 translate-y-1/2 bg-white pr-1'>
          {isOpen ? (
            <i className='fa-solid fa-caret-up'></i>
          ) : (
            <i className='fa-solid fa-caret-down'></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTaskButton;
