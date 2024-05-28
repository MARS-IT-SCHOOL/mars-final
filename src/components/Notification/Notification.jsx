import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = React.memo(({ status, text }) => {
  // Состояние для отслеживания, было ли уведомление уже показано
  const [alreadyHandled, setAlreadyHandled] = useState(false);

  useEffect(() => {


    if (process.env.NODE_ENV === 'development') {
      console.log('Toast in development mode');
      // Только один вызов в режиме разработки
      setTimeout(() => {
        toast[status](text, { theme: 'colored' });
      }, 0);
    } else {
      toast[status](text, { theme: 'colored' });
    }

    setAlreadyHandled(true);

    // Функция очистки, которая будет вызвана при размонтировании компонента
    return () => {
      setAlreadyHandled(false);
    };
  }, [status, text, alreadyHandled]); // Добавление alreadyHandled в зависимости

  // Компонент не рендерит ничего в DOM, только вызывает уведомления
  return null;
});

export default Notification;
