import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAssignmentTurnedIn } from "react-icons/md";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify'; // Use 'toast' instead of 'ToastContainer'
import 'react-toastify/dist/ReactToastify.css';


const RegistrationPage = () => {
  const [notification, setNotification] = useState(null);
  const [requestCount, setRequestCount] = useState(0);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [user, setUser] = useState({
    name: '',
    gamer_username: '',
    spaceid: '',
    password: '',
    group_id: '',
    group_name: 'FRONT',
  });

  const [checkPassword, setCheckPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "spaceid" || name === "group_id") {
      setUser(prevUser => ({
        ...prevUser,
        [name]: Number(value)
      }));
    } else {
      setUser(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    }
    if (name === 'checkPassword') {
      setCheckPassword(value);
    }
  };

  const handleRegister = async () => {
    setRequestCount(prevCount => prevCount + 1);
    try {
      const response = await axios.post('https://marsgame.uz/user/register/', user);
      setNotification({ status: 'success', text: 'Registration Successful' });
      reset();
    } catch (error) {
      setNotification({ status: 'error', text: 'Registration Failed' });
    }
  };

  useEffect(() => {
    if (notification) {
      toast(notification.text, { type: notification.status });
      setNotification(null);
    }
  }, [notification]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-cover bg-[url('https://www.veeforu.com/wp-content/uploads/2023/10/Blue-futuristic-HD-background-free-download-for-gaming-User-interface.jpg')]">
      <form onSubmit={handleSubmit(handleRegister)} onReset={reset} className='w-[68%] h-[80%] bg-blue-950 shadow-2xl shadow-blue-400 bg-opacity-60 rounded-2xl'>
        <div className="shadow-inner w-full h-full shadow-sky-800 rounded-2xl flex-col items-center flex justify-center gap-4 px-20">
          <p className='text-center text-sky-400 font-bold text-5xl mb-5'>Welcome to Mars Game</p>
          <div className='max-w-[60%] max-h-[40%] h-full flex flex-wrap justify-center gap-5 items-center'>
            <input
              {...register("name", { required: true, message: "Name is required" })}
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              placeholder="Type the Name"
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-blue-400 placeholder:text-sky-200 outline-none shadow-inner shadow-blue-300 text-sky-300'
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}

            <input
              {...register("gamer_username", { required: true, message: "Username is required" })}
              type="text"
              required
              name="gamer_username"
              value={user.gamer_username}
              onChange={handleChange}
              placeholder="Type your username"
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-blue-400 placeholder:text-sky-200 outline-none shadow-inner shadow-blue-300 text-sky-300'
            />
            {errors.gamer_username && <span className="error-message">{errors.gamer_username.message}</span>}

            <input
              {...register("spaceid", { required: true, message: "Spaceid is required" })}
              type="number"
              required
              name="spaceid"
              value={user.spaceid}
              onChange={handleChange}
              placeholder="Type your spaceid"
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-sky-400 placeholder:text-sky-200 outline-none shadow-inner shadow-sky-300 text-sky-300'
            />
            {errors.spaceid && <span className="error-message">{errors.spaceid.message}</span>}

            <input
              {...register("group_id", { required: true, message: "GroupId is required" })}
              type="number"
              required
              name="group_id"
              value={user.group_id}
              onChange={handleChange}
              placeholder="Type group id"
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-sky-400 placeholder:text-sky-200 outline-none shadow-inner shadow-sky-300 text-sky-300'
            />
            {errors.group_id && <span className="error-message">{errors.group_id.message}</span>}

            <select
              {...register("group_name", { required: true, message: "Group Name is required" })}
              className="p-3 border border-sky-400 bg-opacity-60 bg-sky-950 rounded-lg shadow-inner shadow-sky-400 text-sky-300 w-full max-w-[85%]"
              name="group_name"
              value={user.group_name}
              onChange={handleChange}
            >
              <option disabled>Select your Group</option>
              <option defaultValue={'FRONT'}>Frontend</option>
              <option value="BACK">Backend</option>
              <option value="DESIGN">Design</option>
              <option value="STARTER">Starter</option>
            </select>
            {errors.group_name && <span className="error-message">{errors.group_name.message}</span>}

            <input
              {...register("password", { required: true, message: "Password is required" })}
              type="password"
              required
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Type your password"
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-sky-400 placeholder:text-sky-200 outline-none shadow-inner shadow-sky-300 text-sky-300'
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}

            <input
              {...register("checkPassword", { required: true, message: "Password Confirm is required" })}
              type="password"
              required
              name="checkPassword"
              value={checkPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-sky-400 placeholder:text-sky-200 outline-none shadow-inner shadow-sky-300 text-sky-300'
            />
            {errors.checkPassword && <span className="error-message">{errors.checkPassword.message}</span>}
          </div>
          <button type="submit" className='flex items-center gap-1 active:scale-95 border-2 border-sky-600 px-9 py-2 bg-sky-600 hover:bg-transparent duration-300 text-white font-bold rounded-lg'>
            <MdAssignmentTurnedIn /> Register
          </button>
          <Link to='/sign-in' className='text-emerald-300 underline'>Already Have Account?</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
