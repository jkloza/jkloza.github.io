import { HELLOS } from '../data';

export const getHello = () => {
  // Generate random number between 0 and length of HELLOS
  const max = HELLOS.length - 1;
  const index = Math.round(Math.random() * max);
  return HELLOS[index];
};

/**
 * The following utilities are functions created through LeetCode, where I
 * took part in various practice problems, along with documenting any areas
 * to focus on learning.
 */

// Learnings:
// 1. Familiarize with regex/string replacement
// 2. Familiarize with string.length and string indices
// 3. Need to think of ALL test cases (one char, two chars, etc)
// 4. Removing whitespace in a string (trim vs trimStart vs trimEnd vs regex replace)

/**
 * @param {string} s
 * @return {boolean}
 */

export function isPalindromeFAIL(s) {
  // Take the string, and remove non-alphanumeric characters, make lower case
  const lowercaseString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Get length of string, need to see if first half equals second half backwards
  const stringLength = lowercaseString.length + 1;
  const firstHalf = lowercaseString.slice(0, stringLength / 2);
  const secondHalf = lowercaseString.slice(stringLength / 2 - 1, stringLength);

  // Check the characters at every point in the string, if there is a difference, return false
  for (let x = 0; x < firstHalf.length; x++) {
    const secondHalfCharIndex = firstHalf.length - 1 - x;
    if (firstHalf[x] !== secondHalf[secondHalfCharIndex]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */

export function isPalindrome(s) {
  // Take the string, and remove non-alphanumeric characters, make lower case
  const lowercaseString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Get length of string, need to see if first half equals second half backwards
  const len = lowercaseString.length;
  // If string has odd number of characters, add one to the length
  const stringLength = len % 2 === 0 ? len : len + 1;
  const secondIndex = len % 2 === 0 ? stringLength / 2 : stringLength / 2 - 1;

  const firstHalf = lowercaseString.substr(0, stringLength / 2);
  const secondHalf = lowercaseString.substr(secondIndex, stringLength);

  // Check the characters at every point in the string, if there is a difference, return false
  for (let x = 0; x < firstHalf.length; x++) {
    const secondHalfCharIndex = firstHalf.length - 1 - x;
    if (firstHalf[x] !== secondHalf[secondHalfCharIndex]) {
      return false;
    }
  }
  return true;
}

// seems to use more memory but is simpler code
export function isPalindromeEasy(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let rev = '';
  for (let i = 0; i < s.length; i++) {
    rev = s[i] + rev;
  }
  if (rev == s) return true;

  return false;
}

/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLastWord(s) {
  // Identify all of the words in a string
  const arrayOfWords = s
    .trimStart()
    .trimEnd()
    .split(/[\n\r\s\t]+/g);
  const lastWord = arrayOfWords.pop();
  return lastWord.length;
}

export function lengthOfLastWordEASY(s) {
  let trimmedString = s.trim();
  return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export function strStr(haystack, needle) {
  // Length of needle
  const nLen = needle.length;
  for (let h = 0; h < haystack.length; h++) {
    if (haystack[h] === needle[0]) {
      // Check if the needle is there!
      const stringInHaystack = haystack.substr(h, nLen);
      if (stringInHaystack === needle) return h;
    }
  }
  return -1;
}
