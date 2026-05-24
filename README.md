# Knights Travails
## Description:
An exploration of the classic problem to calculate the shortest path for a knight in chess between two points on a 8x8 grid. The knight can move two steps forward and one step to the side or one step forward and two steps to the side facing any direction.

## Reflection:
This project felt far simpler than my previous explorations of LinkedLists, HashMaps, and Binary Search Trees. It built upon my knowledge of Breadth First Search which allowed me to get an array of all the points visited between start and end. I struggled a bit to remove all points that were visited but did not contribute to the path, until I realized I could add a parent property representing the previous point and then go from the ending node back to the start. It was an interesting application of BFS and good practice.