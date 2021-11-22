# Project Description
This project will consist of a few games, I've copied the readme.md from the project plan below:

## Synopsis
I'm planning on doing a number of smaller projects, instead of a major one as I had initially thought.
The projects will likely be somewhat basic, and they'll be quick ones to just publish and go.

### TicTacToe
I'm probably going to make a TTT game, and I'm going to focus on:
* 2P mode
* 1P-v-AI mode
  * Easy        (10% chance to make a "good" move)
  * Medium      (30% chance to make a "good" move)
  * Hard        (80% chance to make a "good" move)
  * Impossible  (Always makes best move)
* Selectible colour scheme, will most likely reuse old code I have since there isn't a whole lot of efficient ways to implement it.
* Possibly a set of different icons, so that the players can choose something more interesting than X/O.


### Rock Paper Scissors
Had a quick idea for RPS, will use 5 "elements" which all have two strengths and weaknesses.

* 2P-mode, easy to implement.
* 1P-v-AI, trivial to implement.
* 2P+ mode, may be difficult to implement, but would be somewhat fun.

Not a whole lot to say about it, it's RPC.

### Node.JS chat program
Was thinking a bit about a P2P chat client, a very simple one.

* E2EE
  * SHA-512
* P2P
* Commandline Interface (Obv requires installing Node.JS)

Would be good to learn how to implement key exchanges and E2EE/P2P networking in general, but I don't think this is a very good idea to bring up in this course.

## Conclusion
Whilst these are only three projects, I am likely going to flesh this draft out as I progress through these projects.
You can expect a few small games and/or silly implementations of stuff like a calculator or a notepad.

# Progress
- [x] Intitial draft
- [ ] TTT
- [ ] RPS
- [ ] ~Node.JS Chat~
- [ ] user-guide.md

### TTT
- [ ] Implement base TTT functions
- [ ] Prototype AI
- [ ] Colour selector
- [ ] Icon set
- [ ] Easy AI
- [ ] Medium AI
- [ ] Hard AI
- [ ] Impossible AI
- [ ] user-guide.md entry

### RPS
- [ ] Implement base rules
- [ ] Implement AI
- [ ] Make 2P mode
- [ ] Mode selection
- [ ] Colour scheme
- [ ] Name "elements"
- [ ] Prototype MP mode.
- [ ] user-guide.md entry

### Node.JS chat app
- [ ] Implement basic P2P communication using HTTP GET/PUSH.
- [ ] Implement basic message encryption. (B64, Easily cracked, however)
- [ ] Set up Key-Exchange
- [ ] Set up SHA-512 encryption using Public Key and Private Key
- [ ] Set up basic receipt mode
- [ ] Look at Electron API (Possibly making a UI?)
- [ ] user-guide.md entry

# EOF