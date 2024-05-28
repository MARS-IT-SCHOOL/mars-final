import { SelectedWords } from '../functions/SelectedWords';
import { reset } from '../functions/Reset';

window.content = ''; // string of random generated game content (words or quote)

const words = [
    "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line" ]

export default function English({ value }) {
    const selectedWords = SelectedWords(words, value);
    window.content = selectedWords.join(' ');
    // console.log(window.content);
    const wordsBox = document.getElementById('words');
    if (wordsBox) {
        reset();
    }

    return (
        <div className='flex flex-wrap relative' id='words'>
            {selectedWords.map((word, wordIndex) => (
                <div
                    key={wordIndex}
                    className={`mr-2 word ${
                    wordIndex === 0 ? 'active first_word' : wordIndex === selectedWords.length - 1 ? 'last_word' : ''
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
