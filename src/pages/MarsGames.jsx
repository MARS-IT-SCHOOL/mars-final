import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const gameData = [
  { id: 1, name: 'Mars Typing', description: 'Здесь можно писать быстро и без ошибок', link: "/typing", image: 'https://todaysparent.mblycdn.com/tp/resized/2021/07/767x431/fun-typing-games-for-kids-dance-mat-typing.jpg' },
  { id: 2, name: 'Mars Single Quiz', description: 'Здесь вы можете проверить свои знания', link: "/quiz", image: 'https://media.istockphoto.com/id/1085616326/video/quiz-neon-light-on-brick-wall.jpg?s=640x640&k=20&c=_ftLa6Xk0YGOarRlyQZTwRRRyu4h1Vy4kFHfBMLoP2Q=' },
  { id: 3, name: 'Mars Builder', description: 'Стройте базы на Марсе', link: "", image: '' }
];

const MarsGames = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className='glass rounded-lg w-full h-full flex-wrap'>
      {gameData.map((game) => (
        <div key={game.id} className='max-w-sm overflow-hidden shadow-lg bg-neutral-900 text-white m-4 relative rounded-2xl'>
          <img className='w-full absolute top-0 left-0' src={game.image} alt={game.name} />
          <div className='px-6 py-4 relative z-10 bg-slate-950 bg-opacity-70 h-full'>
            <p className='font-bold text-xl mb-2'>{game.name}</p>
            <p className='text-base'>
              {game.description}
            </p>
            <div className='pt-10 pb-2'>
              <Link to={game.link} className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>
                Start Game
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default MarsGames;
