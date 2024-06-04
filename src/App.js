import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { allUsersData } from './slices/usersRatingSlice';
import Sidebar from './components/Sidebar/sidebar';
import Home from './pages/Home.jsx';
import MarsGames from './pages/MarsGames';
import Statistics from './pages/Statistics';
import LeaderBoard from './pages/LeaderBoard';
import Settings from './pages/Settings';
import Login from './pages/LoginPage';
import bgMusic from './music/BgMusic.mp3';
import BackgroundMusic from './components/BackgroundMusic/BacgroundMusic';
import Shop from './pages/Shop';
import Navbar from './components/Navbar/navbar';
import { fetchShopData } from './slices/shopSlice';
import { fetchProfileCardData } from './slices/profileCardSlice';
import Inventory from './pages/Inventory';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';
import { setTheme } from './actions/themeActions'; // Import setTheme action

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.data.loading || state.shop.loading || state.profileCard.loading);
  const stateUser = useSelector(state => state.auth);
  const currentTheme = useSelector(state => state.theme.theme); // Get current theme from Redux store
  console.log(currentTheme, "current");
  const userData = stateUser.user;
  const isAuth = stateUser.isAuthenticated;
  console.log(userData);
  useEffect(() => {
    dispatch(allUsersData());
    dispatch(fetchShopData());
    dispatch(fetchProfileCardData());

    // Check for theme in local storage when component mounts
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      // If theme exists in local storage, dispatch setTheme action to update Redux store
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    // Apply theme to document root whenever it changes
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='w-full flex'>
      <Sidebar />
      <BackgroundMusic bgMusic={bgMusic} />
      <div className='flex flex-col gap-5 w-full px-5 py-2 mx-auto max-w-[85%]'>
        <Navbar nameUser={userData?.fullname} coin={userData?.total?.mini_coin} />
        <Routes>
          <Route path='/dashboard/home' element={<PrivateRoute isAuth={isAuth} component={Home} />} />
          <Route path='/dashboard/games' element={<PrivateRoute isAuth={isAuth} component={MarsGames} />} />
          <Route path='/dashboard/statistics' element={<PrivateRoute isAuth={isAuth} component={Statistics} />} />
          <Route path='/dashboard/leaderBoard' element={<PrivateRoute isAuth={isAuth} component={LeaderBoard} />} />
          <Route path='/dashboard/settings' element={<PrivateRoute isAuth={isAuth} component={Settings} />} />
          <Route path='/dashboard/shop' element={<PrivateRoute isAuth={isAuth} component={Shop} />} />
          <Route path='/dashboard/inventory' element={<PrivateRoute isAuth={isAuth} component={Inventory} />} />
          <Route path='/dashboard/login' element={<Login />} />
          <Route path="*" element={<Navigate to={isAuth ? "/dashboard/home" : "/dashboard/login"} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;