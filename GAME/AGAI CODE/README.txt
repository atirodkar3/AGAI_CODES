The two files attached contain code that runs the demonstration by the Player character (LearningForHumans.js) and the code that makes the NPC obtain the movement patterns to complete the puzzle (LearnerMovement.js).

In Learning for Humans, we create an array called pickups which houses the absolute positions of the various objects that constitute our puzzle. These include the scrolls to pick up and the steps to stand on.

We have two sets of scrolls for each step color. For odd steps, the left scroll is to be picked up and for even ones, the right scroll is to be picked up.

As can be seen, we use boolean variables to move between demonstration states. The initial set of demonstration cases are hardcoded since we wanted to give a good exhaustive set to the NPC that it can reason from.

We have functions that obtain the distance between objects, the closest object to the player. A pickup is initiated on pressing the Left Arrow Key. A right arrow key entails the completion of a sequence and gives it for evaluation.

Every time a pickup happens, we add the closest object's name to the string. If on completing a sequence, it is found that the completed string and the case string are the same, then we move to the next sequence of steps.

After all three cases are completed, we obtain the LCS to get the common set of steps between objects and pass this to LearnerMovement.js which also now contains the pickups array.

We generate a random string for the NPC and the NPC segments it to obtain a set of steps which it should take to complete the patter. If WHITe, then the steps are: START-EITHER WHITE1 SCROLL OR WHITE2 SCROLL and then STEPWHITE.

Any branches are initially randomly selected by the NPC. After completion it asks us if the demo shown was correct or not. Only after receiving feedback from us, does it perform the correct movement, as shown in the move function and actmove function.

The feedback is binary in our case and we give it using the left or right arrow keys. If left, then the demo step taken was correct, else flip it. After feedback for all 4 is obtained, the NPC carries out the final movement.

Based on if the steps were finally correct or not, a level load is done. The player at any time does not get inputs on what the steps the NPC has to take. The NPC infers this from the learnt data. He has to help the NPC choose the right scroll.

  