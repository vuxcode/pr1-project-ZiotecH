# Bug List

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

1. OOM error
 - Firefox ate up 16gb of RAM.
 - Turns out I wrote x instead of y in a for loop. ~woops~

2. TTT not regocnising a winner
 - Moved turn 8 check down to end of function

3. TTT didn't reset properly.
 - reworked reset function

4. Wrong player recognised for victory
 - changed incorrect values in check function