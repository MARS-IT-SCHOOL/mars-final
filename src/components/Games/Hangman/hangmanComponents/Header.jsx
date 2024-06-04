const ITEMS = ["frontend", "backend", "design"];

export const Header = ({ setTopic, score }) => {

  return (
    <header className="bg-[#2BAB9A] p-10 py-4 flex justify-between items-center text-white overflow-hidden">
      <div>
        <h1 className="text-xl font-bold">HANGMAN!</h1>
      </div>
      <nav>
        <ul className="flex gap-10 items-center">
          <li>
            <p className="text-lg text-red-500 font-semibold font-sans">Your Score: {score}</p>
          </li>
          <li>
            <p className="text-lg font-semibold font-sans">Choose Topics:</p>
          </li>
          {ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => setTopic(item)}
                className="uppercase p-4 py-1 bg-white text-slate-700 rounded-full font-bold block hover:bg-red-100 hover:scale-110 transition-all"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};