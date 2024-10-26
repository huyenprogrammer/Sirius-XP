import charactor_boy_hi from "assets/charactor/charactor_boy_hi.svg";
import charactor_boy_nor from "assets/charactor/charactor_boy_nor.svg";
import charactor_girl_hi from "assets/charactor/charactor_girl_hi.svg";
import charactor_girl_nor from "assets/charactor/charactor_girl_nor.svg";
import { IUserInfor } from "constants/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

interface IForm {
  username: string;
  name: string;
  password: string;
  gender: 1 | 2;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState<1 | 2>(1);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { register, handleSubmit, reset } = useForm<IForm>();
  const [, setUserInfor] = useLocalStorage<IUserInfor>("userInfor", {});

  const handleSelectBoy = () => setGender(1);

  const handleSelectGirl = () => setGender(2);

  const handleCheckAgreeToTerms = () => setAgreeToTerms(!agreeToTerms);

  const onSubmit = (data: IForm) => {
    setUserInfor({ ...data, gender });
    reset();
    alert("Đăng ký thành công!");
    navigate("/sign-in");
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
          {...register("name")}
          placeholder='Tên hiển thị'
          required
          maxLength={32}
          className='form-input'
        />

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

      <div className='relative grid grid-cols-2 mb-2 cursor-pointer'>
        <img src={charactor_boy_nor} alt='' />
        <img src={charactor_girl_nor} className='ml-[-1px]' alt='' />

        <div className='absolute grid grid-cols-2'>
          <img
            src={charactor_boy_hi}
            className={`${gender === 1 ? "" : "opacity-0"} hover:opacity-100`}
            onClick={handleSelectBoy}
            onTouchEnd={handleSelectBoy}
            alt=''
          />
          <img
            src={charactor_girl_hi}
            className={`${
              gender === 2 ? "" : "opacity-0"
            } hover:opacity-100 ml-[-1px]`}
            onClick={handleSelectGirl}
            onTouchEnd={handleSelectGirl}
            alt=''
          />
        </div>
      </div>

      <div className='flex gap-1 mb-7'>
        <div className='h-6'>
          <input
            type='checkbox'
            onChange={handleCheckAgreeToTerms}
            name='agree_to_terms'
            id='agree_to_terms'
          />
        </div>

        <label htmlFor='agree_to_terms'>
          Tôi đã đọc kỹ và hoàn toàn đồng ý với{" "}
          <Link to='#' className='text-[#19A9B6] hover:underline'>
            Điều khoản sử dụng
          </Link>
          .
        </label>
      </div>

      <button
        className='bg-blue-theme text-white h-[60px] w-full text-lg disabled:bg-gray-400 mb-3'
        type='submit'
        disabled={!agreeToTerms}
      >
        Đăng ký
      </button>

      <div className='flex justify-center gap-1'>
        Hoặc
        <Link to='/sign-in' className='text-[#19A9B6] hover:underline'>
          Đăng nhập
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
