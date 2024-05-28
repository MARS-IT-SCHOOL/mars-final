export const WPM = (input, text, averageChars, correctChars, time, acc, deletedErrors) => {

    const editDistance = (str1, str2) => {
        // Handle empty strings, this situation is very unlikely to happen
        let length1 = str1.length;
        let length2 = str2.length;

        if (length1 === 0) return length2;
        if (length2 === 0) return length1;

        // initalize the matrix
        const dp = new Array(length1 +1).fill(null).map(() => new Array(length2 + 1).fill(null));

        for (let i = 0; i <= length1; i++) {
            dp[i][0] = i;
        }
        for (let j = 0; j <= length2; j++) {
            dp[0][j] = j;
        }

        // Fill the DP table
        for (let i = 1; i <= length1; i++) {
            for (let j = 1; j <= length2; j++) {
                const cost = str1[i-1] === str2[j-1] ? 0 : 1;
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]; // No edit needed if characters are the same
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],   // Deletion from str1
                        dp[i][j - 1],   // Insertion into str1
                        dp[i - 1][j - 1] // Substitution
                    );
                }
            }
        }

        return dp[length1][length2];
    }

    const distance = editDistance(input, text);
    const netWPMdiv = document.getElementById('netWPM');

    const wordsDiv = document.querySelector('#words');
    const uncorrectedErrors = wordsDiv.querySelectorAll('.text-red-500').length;
    const correctChars2 = wordsDiv.querySelectorAll('.text-green-500').length;

    const errors = ((distance === uncorrectedErrors) ? distance : uncorrectedErrors) + deletedErrors;
    console.log('errors: ' + errors);

    const one = Math.floor((correctChars / averageChars) * (60 / time) * (1 - errors / input.length));
    const two = Math.floor((correctChars / 5) * (60 / time) * (100 / acc));
    const wpm = Math.floor((one + two) / 2);

    const gross = (input.length / averageChars);
    const netWPM = Math.floor((gross - errors) / (time / 60));


    const wpm3 = Math.floor((correctChars / text.length) * (text.length / (time / 60)));
    const wpm4 = Math.floor((correctChars / time) * 60);

    // netWPMdiv.innerHTML = netWPM;
    netWPMdiv.innerHTML = wpm;
    // console.log('uncorrected: ' + uncorrectedErrors);
    // console.log('distance: ' + distance);
    // console.log('time: ' + time);

    console.log('correctChars and correctChars2: ' + [correctChars, correctChars2]);
    console.log('one: ' + one);
    console.log('two: ' + two);
    console.log('netWPM: ' + netWPM);
    console.log('three: ' + wpm3);
    console.log('four: ' + wpm4);
}