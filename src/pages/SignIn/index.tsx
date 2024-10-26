import GameWorldMap from "assets/background/GameWorldMap.svg";
import { IUserInfor } from "constants/types";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

interface IForm {
  username: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const [userInfor] = useLocalStorage<IUserInfor>("userInfor", {});

  const onSubmit = (data: IForm) => {
    if (data.username !== userInfor.username) {
      alert("Tài khoản không tồn tại!");
      return;
    }

    if (data.password !== userInfor.password) {
      alert("Mật khẩu không đúng!");
      return;
    }

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='px-4 py-9 lg:w-[500px] lg:mx-auto min-h-screen flex flex-col justify-center'
    >
      <div className='flex items-center gap-2.5 mb-8'>
        <div className='w-full h-px bg-black' />
        <div className='text-[32px] font-semibold text-nowrap font-Lora'>
          Sirius XP
        </div>
        <div className='w-full h-px bg-black' />
      </div>

      <div className='grid gap-5 mb-7'>
        <input
          type='text'
          {...register("username")}
          placeholder='Tài khoản'
          required
          maxLength={32}
          className='form-input'
        />

        <input
          type='password'
          {...register("password")}
          placeholder='Mật khẩu'
          required
          maxLength={12}
          className='form-input'
        />
      </div>

      <img src={GameWorldMap} className='mb-16' alt='' />

      <button
        className='bg-blue-theme text-white h-[60px] w-full text-lg disabled:bg-gray-400 mb-3'
        type='submit'
      >
        Đăng nhập
      </button>

      <div className='flex justify-center gap-1'>
        Chưa có tài khoản?
        <Link to='/sign-up' className='text-[#19A9B6] hover:underline'>
          Đăng ký
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
