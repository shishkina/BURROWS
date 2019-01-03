### Hangman

Today we will be creating the popular game Hangman!

## Before we getting going

Once again lets take a minute and model the hangman problem domain!!!

**NOTE** You have been given a test suite for this application. You will need to name the functions exactly as they listed below, if you choose to use the test suite. You will need to actually load the src and spec files into the `SpecRunner.html` if you choose to use the test suite.

---

You will need to create the following classes, however these might not be in the right order. You will need to make the decision on which order to make these classes.

# Game

Game is a class

These are the attributes a Game should have:

  - `guesses` -> set to null
  - `guessedLetters` -> set to null
  - `words` -> set to null
  - `currentWord` -> set to null

These are the behaviors a Game should have:

  - `startGame`
    - accepts an argument, an array of strings
    - sets `guesses` to 8
    - sets `currentWord` to an instance of `word`
    - resets the `guessedLetters` to an empty array
    - sets the words array to the argument array
  - `guess` -> will try a letter, if the letter hasnt already been tried
  - `isOver` -> returns true if the current word has been guessed or there are no more guesses
  - `overMessage()`
    - returns "YAY!! You won!!" if the current word is found
    - returns "Sorry, you lost!" if there are no more guesses
    - returns undefined if neither condition is met
  - `render` -> returns rendered word, and number of guesses left, and the guessed letters so far

# App

Use your knowledge of the DOM to put this game in the browser. You can go about this however you would like.

# Word

- Word is a class that accepts an word argument

These are the attributes a Word should have:

  - `letters` -> an array

These are the behaviors a Word should have:

  - `getLetters` -> accepts a word argument, will fill the letters array with letters from the word argument
  - `isFound` -> returns true if the word is found, false otherwise
  - `try` -> accepts a letter argument, will reveal the letter if it is found, will return true if a letter was found and false if it wasnt
  - `render` -> returns the word in its guessed state
    - ex: for the word 'closure', if the letters `l`, `s`, and `e` have been guessed, this function should return the string `_ l _ s _ _ e`

# Letter

- Letter is a class that accepts an value argument

These are the attributes a Letter should have:

  - `value` -> a string
  - `hidden` -> a boolean set to true

These are the behaviors a Letter should have:

- `show` -> sets hidden to false
- `render()` -> returns '_' if the letter is hidden, returns the value if the letter is not hidden
