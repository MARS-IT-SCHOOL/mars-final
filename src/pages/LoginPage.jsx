import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PiSignIn } from "react-icons/pi";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setTheme } from '../actions/themeActions'; // Импортируем setTheme

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ gamer_username: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = validateCredentials(credentials);
    
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('https://marsgame.uz/user/login/', credentials);
        const userData = response.data; 
        dispatch({ type: 'LOGIN', payload: userData }); 

        // Устанавливаем тему после успешного логина
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          dispatch(setTheme(storedTheme));
        }

        toast.success('Вы успешно вошли');
        navigate('/dashboard/home'); 
      } catch (error) {
        console.error('Login failed:', error);
        toast.error('Вход не выполнен,' + " " + error.code);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const validateCredentials = ({ gamer_username, password }) => {
    const errors = {};
    if (!gamer_username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-cover bg-[url('https://www.veeforu.com/wp-content/uploads/2023/10/Blue-futuristic-HD-background-free-download-for-gaming-User-interface.jpg')]">
      <form onSubmit={handleLogin} className='w-1/2 h-1/2 bg-sky-700 shadow-lg shadow-sky-400 bg-opacity-60 rounded-3xl'>
        <div className="shadow-inner w-full h-full shadow-sky-300 rounded-3xl flex-col items-center flex justify-center gap-5 px-20">
          <p className='text-center text-sky-400 font-bold text-5xl mb-5'>Sign-in</p>
          <div className='max-w-[75%] flex flex-col gap-4 justify-between'>
            <input
              type="text"
              name="gamer_username"
              placeholder="Username"
              value={credentials.gamer_username}
              onChange={handleChange}
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-blue-400 placeholder:text-sky-200 outline-none shadow-inner shadow-blue-300'
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className='px-3 py-2 rounded-md max-w-[200px] max-h-[50px] bg-transparent border-2 border-blue-400 placeholder:text-sky-200 outline-none shadow-inner shadow-blue-300'
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <button type='submit' className='border-2 border-sky-600 px-9 py-2 bg-sky-600 hover:bg-transparent duration-300 flex items-center gap-1 active:scale-95 text-white font-bold rounded-lg'><PiSignIn /> Login</button>
          <Link to='/registration' className='text-emerald-300 underline'>Not Registered yet?</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
