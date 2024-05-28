
// Quote length: 0 - 100 characters
const quotes = [
    "You have the power to heal your life, and you need to know that.",
    "They don't know that we know they know we know.",
    "Don't it make you sad to know that life is more than who you are?",
    "Leave something for someone but don't leave someone for something.",
    "The people with ideas have no power and the people with power have no ideas.",
    "You must take life the way it comes at you and make the best of it.",
    "If you don't know what you want, how are you going to know when you get it?",
    "Your memory is the glue that binds your life together.",
    "I'm sure there are things you know that you don't even know you know.",
    "You can't use the fire exit because you're not made of fire.",
    "The person that has the most to do with what happens to you is you!",
    "Sometimes the world that you know it just decides to become something else.",
    "If you only do what you can do, you will never be more than you are now.",
    "Make sure you marry someone who laughs at the same things you do.",
    "Are you trying to impress me? What would impress me more is if you never did that again.",
    "Believe in one thing too much and you have no room for new ideas.",
    "You should never, never doubt something that no one is sure of.",
    "I am the wisest man alive, for I know one thing, and that is that I know nothing.",
    "Now is the time for resting. Some things are ill to hear when the world's in shadow.",
    "Courage is resistance to fear, mastery of fear - not absence of fear.",
    "The right man in the wrong place can make all the difference in the world.", // G-Man, Half-Life 2
    "It's dangerous to go alone, take this!", // Old Man, The Legend of Zelda
    "Protocol one: link to Pilot. Protocol two: uphold the mission. Protocol three: protect the Pilot.", // BT-7274, Titanfall 2
    "You are here, and it's beautiful, and escaping isn't always something bad.", // Delilah, Firewatch
    "Could life exist in the greatest depths of the ocean? It could!",
    "When I was younger, I left a trail of broken hearts like a rockstar. I'm not proud of it.",
    "The most important days in your life are the day you are born and the day you find out why.",
    "You get tough like me and you don't get hurt. You look out for yourself and nothin' can touch you...",
    "What is the point of staying alive if you don't at least try to do something remarkable?",
    "You can't cross the sea merely by standing and staring at the water.",
    "All we really want is for no one to have a boring life, to be impressive, so we can be impressed.",
    "Popular is even weirder. Turns out, it's not the same thing as having friends at all."
]

export default function EnglishShort() {
    // randomly choose one quote from quote variables
    const random = Math.floor(Math.random() * quotes.length);
    const sentence = quotes[random];
    const wordsArray = sentence.split(/\s+/); // split a string into words

    window.content = sentence;
    // console.log(window.content);

    return (

        <div className='flex flex-wrap h-28 relative' id='words'>
            {wordsArray.map((word, wordIndex) => (
                <div
                    key={wordIndex}
                    className={`mr-2 word ${
                    wordIndex === 0 ? 'active first_word' : wordIndex === wordsArray.length - 1 ? 'last_word' : ''
                    }`}
                >
                    {word.split('').map((letter, letterIndex) => (
                    <span
                        key={letterIndex}
                        className={`letter ${
                        wordIndex === 0 && letterIndex === 0 ? 'current' : ''
                        }`}
                    >
                        {letter}
                    </span>
                    ))}
                </div>
            ))}
        </div>
    )
}