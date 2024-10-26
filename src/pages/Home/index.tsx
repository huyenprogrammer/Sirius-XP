import Daily from "components/Daily";
import Plan from "components/Plan";
import Statistical from "components/Statistical";
import Todo from "components/Todo";
import { IUserInfor } from "constants/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const Home = () => {
  const navigate = useNavigate();
  const [userInfor] = useLocalStorage<IUserInfor>("userInfor", {});

  useEffect(() => {
    if (!userInfor.username) {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfor.username]);

  return (
    <div>
      <div className='grid lg:grid-cols-4 grid-cols-1 px-3'>
        <Daily />
        <Todo />
        <Plan />
        <Statistical />
      </div>
    </div>
  );
};

export default Home;
