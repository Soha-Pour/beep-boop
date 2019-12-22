# Programming language suggester

#### A web application that returns a range of numbers from zero to a user inputted value based on a set of rules (described below).

#### By: Soha Pourpirali

## Description

This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

## Specifications

* Spec: The program returns a range of numbers from 0 to the users inputted number
  *  Input: "4"
  * Output: "0, 1, 2, 3, 4"


* Spec: The program returns "beep" for all digits containing a 1
  *  Input: "4"
  * Output: "0, "beep", 2, 3, 4"


* Spec: The program returns "boop" for all digits containing a 2
  *  Input: "4"
  * Output: "0, "beep", "boop", 3, 4"  


* Spec: The program returns "I'm sorry, I can't compute that" for all digits containing a 3
  *  Input: "4"
  * Output: "0, "beep", "boop", "I'm sorry, I can't compute that", 4"  


* Spec: The program returns "boop" for all digits containing a 1 and a 2
  *  Input: "12"
  * Output: "boop"


* Spec: The program returns "I'm sorry, I can't compute that" for all digits containing a 3 in addition to a 1 or 2
  *  Input: "13"
  * Output: "I'm sorry, I can't compute that"


## Setup/Installation Requirements

* Clone the repo onto your personal machine by entering the following in your machine's terminal: `git clone https://github.com/Soha-Pour/beep-boop.git`

* View the project by double-clicking on the index.html file in the *beep-boop* folder on your machine.

* If you want to alter the code, create a new branch by entering the following in your machine's terminal: `git branch [name of new branch]`

* Commit any changes you make by entering the following in your machine's terminal: `git commit -m "[text describing what has changed]"`

* Push to your own repository by entering the following in your machine's terminal: `git push origin master`

## Known Bugs

None.

## Support and contact details

If you run into issues, contact me at: pourpis2@wwu.ed

## Technologies used

HLML, CSS, and Bootstrap, Javascript (with JQuery library)

### License

MIT license
Copywrite (c) 2019
