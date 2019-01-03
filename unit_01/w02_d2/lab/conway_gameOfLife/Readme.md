

### Conway's Game of Life
- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by over-population.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
Found at: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

### Your Task!
- Given a bunch of provided code... discover what's missing... and implement it.  You should not work alone for ANY of this.  This is a pairing exercise.

### Implementation rules
- The "game state" must be a single dimensional array, i.e. a normal array.
- When a "cell" is alive... it should contain the number 1
- When a "cell" is not alive... it should contain the number 0
- In this example gameState, there are 2 living cells:
- `gameState = [1, 0, 1, 0]`
