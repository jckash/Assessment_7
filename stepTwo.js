function addToZero(nums) {
    const numbers = {};

    for (const num of nums) {
        if (numbers[-num]) {
            return true;
        }
        numSet[num] = true;
    }

    return false;
}

// Runtime: O(n) Space: O(n)

function hasUniqueChars(word) {
    const charSet = new Set();

    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

// Runtime: O(n) Space: O(n)

function hasUniqueChars(word) {
    const characters = {};

    for (const char of word) {
        if (characters[char]) {
            return false;
        }
        characters[char] = true;
    }

    return true;
}

// Runtime: O(n) Space: O(1)

function findLongestWord(words) {
    let maxLength = 0;

    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}

//Runtime: O(n) Space: O(1)