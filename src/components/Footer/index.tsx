import { useState } from "react";

const tabs = [
  { icon: "fa-regular fa-calendar-days" },
  { icon: "fa-regular fa-circle-check" },
  { icon: "fa-regular fa-calendar-check" },
  { icon: "fa-solid fa-face-smile-wink" },
  // { icon: "fa-solid fa-shop" },
];

const Footer = () => {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (id: number) => {
    setTab(id);

    const element = document.getElementById(id.toString());

    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <div className='sticky bottom-0 h-10 bg-blue-theme text-white flex justify-around items-center lg:hidden'>
      {tabs.map((x, i) => (
        <i
          className={`text-xl ${x.icon}`}
          key={i}
          style={{ opacity: tab === i ? 1 : 0.6 }}
          onClick={() => handleChangeTab(i)}
        />
      ))}
    </div>
  );
};

export default Footer;
