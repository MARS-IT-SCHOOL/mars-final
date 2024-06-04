import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './hangmanComponents/Header';
import { TopicLabel } from './hangmanComponents/TopicLabel';
import Keyboard from './hangmanComponents/Keyboard';
import HangmanImg from './hangmanComponents/HangmanImg';

const words = {
  frontend: ["REACT", "JAVASCRIPT", "CSS", "HTML", "ANGULAR"],
  backend: ["NODEJS", "EXPRESS", "PYTHON", "DATABASE", "RUBY"],
  design: ["PHOTOSHOP", "FIGMA", "ILLUSTRATOR", "UI", "UX"]
};

function Hangman() {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [word, setWord] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [topic, setTopic] = useState('frontend');
  const [lastWord, setLastWord] = useState('');
  const [score, setScore] = useState(70);
  const maxWrongGuesses = 6; // Maximum wrong guesses allowed

  const getRandomWord = (topic) => {
    let newWord;
    do {
      newWord = words[topic][Math.floor(Math.random() * words[topic].length)];
    } while (newWord === lastWord);
    setLastWord(newWord);
    return newWord;
  };

  useEffect(() => {
    setWord(getRandomWord(topic));
  }, [topic]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const letter = event.key.toUpperCase();
      if (/^[A-Z]$/.test(letter) && !selectedLetters.includes(letter) && !gameOver) {
        handleLetterClick(letter);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedLetters, word, gameOver]);

  useEffect(() => {
    if (wrongGuesses >= maxWrongGuesses) {
      setGameOver(true);
    }
  }, [wrongGuesses]);

  const handleLetterClick = useCallback(
  (letter) => {
    if (!word || selectedLetters.includes(letter) || gameOver) {
      return; // Ignore clicks if the word is not set, the letter is already selected, or the game is over
    }

    setSelectedLetters([...selectedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    } else {
      // Check if all unique letters in the word have been guessed
      const uniqueLetters = new Set(word);
      const remainingLetters = [...uniqueLetters].filter(l => !selectedLetters.includes(l));
       // Update score using functional update
      console.log("letters: ",remainingLetters)
      if (remainingLetters.length === 0) {
        // Increase score when all unique letters are guessed
        setScore((prev) => prev + 10); // Update score using functional update
      }
    }
  },
  [selectedLetters, word, gameOver]
);

 

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className="letter text-teal-500 ">
        {selectedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  const restartGame = useCallback(() => {
    setSelectedLetters([]);
    setWrongGuesses(0);
    setWord(getRandomWord(topic));
    setGameOver(false);
  }, [topic]);

  const handleTopicChange = (newTopic) => {
    setTopic(newTopic);
    restartGame();
  };

  const isGameWon = word.split('').every((letter) => selectedLetters.includes(letter));
  useEffect(() => {
    if (gameOver) {
      setScore((prevScore) => prevScore - 10);
    } else if (isGameWon) {
      setScore((prevScore) => prevScore + 10);
    }
  }, [gameOver, isGameWon]);

  console.log(isGameWon)

  return (
    <div className='overflow-x-hidden'>

      <div className="flex flex-col h-screen bg-blue-700 overflow-x-hidden">
      <Header setTopic={handleTopicChange} score={score} />
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-[2] bg-[#1D3663]  flex items-center flex-col gap-8 pt-5 overflow-hidden">
          <TopicLabel topic={topic} />
          <div className="word flex gap-2 text-2xl">
            {renderWord()}
          </div>
          <div className="text-2xl font-bold animate-pulse text-red-700">
            {isGameWon ? "You Win!" : null}
            {gameOver ? "Game Over..." : null}
          </div>
          <div className="hangman">
            <HangmanImg wrongGuesses={wrongGuesses} />
          </div>
          {(isGameWon || gameOver) && (
            <button onClick={restartGame} className="text-white py-3 px-10 border-none rounded-full cursor-pointer text-lg mt-5 bg-red-700 hover:scale-105 hover:duration-300 active:scale-95 animate-pulse font-semibold">
              Restart
            </button>
          )}
          {!isGameWon && !gameOver && <Keyboard hidden={gameOver} onClick={handleLetterClick} />}
          <div className='absolute left-[-100px] top-[80px] animate-pulse w-80 h-80  rounded-[50%] border-2 border-teal-500 shadow-2xl shadow-teal-500'></div>
          <div className='absolute left-[-70px] bottom-[100px] animate-pulse w-80 h-80 rotate-12 border-2 border-teal-500 shadow-2xl shadow-teal-500'></div>
          <div className='absolute top-[150px] right-[40px] animate-pulse w-72 h-72 rotate-[-17deg] border-2 border-teal-500 shadow-2xl shadow-teal-500'></div>

        </div>
      </main>
    </div>
    </div>
  );
}

export default Hangman;