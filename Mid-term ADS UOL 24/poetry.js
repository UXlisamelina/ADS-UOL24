document.getElementById('rhymes-search').addEventListener('click', () => {
    const inputWord = document.getElementById('input-word').value.trim();
    if (inputWord) {
        fetch('wordlist.txt')
            .then(response => response.text())
            .then(data => {
                const wordlist = parseWordlist(data);
                const rhymes = FIND_RHYMES(inputWord, wordlist);
                displayResults(rhymes);
            })
            .catch(error => console.error('Error fetching the wordlist:', error));
    }
});

function parseWordlist(data) {
    const wordlist = {};
    const words = data.split(/\r?\n/);
    words.forEach(word => {
        const lastTwoChars = word.slice(-2);
        const lastThreeChars = word.slice(-3);

        if (!wordlist[lastTwoChars]) {
            wordlist[lastTwoChars] = [];
        }
        if (!wordlist[lastThreeChars]) {
            wordlist[lastThreeChars] = [];
        }

        wordlist[lastTwoChars].push(word);
        wordlist[lastThreeChars].push(word);
    });
    return wordlist;
}

function FIND_RHYMES(inputWord, wordlist) {
    const lastTwoChars = inputWord.slice(-2);
    const lastThreeChars = inputWord.slice(-3);

    let rhymes = wordlist[lastThreeChars];

    if (!rhymes || rhymes.length === 0) {
        rhymes = wordlist[lastTwoChars];
    }

    return rhymes || [];
}

// Function to display the results of rhymes in the HTML
function displayResults(rhymes) {
    const resultsContainer = document.getElementById('search-results'); // Get the container for results
    resultsContainer.innerHTML = ''; // Clear any previous results in the container

    // If there are rhymes found, display them
    if (rhymes.length > 0) {
        const shuffledRhymes = shuffleArray(rhymes); // Shuffle the rhymes array for variety
        shuffledRhymes.slice(0, 15).forEach(rhyme => { // Limit to displaying 10 rhymes
            const p = document.createElement('p'); // Create a paragraph element
            p.textContent = rhyme; // Set the text content of the paragraph to the rhyme
            resultsContainer.appendChild(p); // Append the paragraph to the results container
        });
    } else {
        resultsContainer.textContent = 'No rhymes found.'; // Display message if no rhymes found
    }
}

// Function to shuffle an array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j to shuffle array
    }
    return array; // Return the shuffled array
}
