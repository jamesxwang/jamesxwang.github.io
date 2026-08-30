---
title: AI Search Methods
date: 2019-07-23 23:00:26
tags: [Python, AI, search algorithms]
categories: ["Study Notes", "Algorithm"]
---
### Overview
Recently I am learning [Berkley AI Pac-man Project](http://ai.berkeley.edu/project_overview.html), and it requires to use Search methods for finding fixed food dots, this article is used to record the learning process. 
<!--more-->

![pacman-game](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/AI/AI-pacman_game.gif)

### Uninformed Search Methods
#### Depth-First Search
Unlike Breadth-first Search (BFS) is to try all the possibilities of a vertex before accessing the next vertex., DFS is from vertex to vertex. After every possible attempt at a given vertex, it goes back to the last vertex to try the next vertex.
Algorithm template for DFS:
```bash
void Dfs(Vertex V)
{
    Visited[v] = True;
    for each W adjacent to V
        if(!Visited[W])
            Dfs(W);
}
```
Illustration: (Nodes at depth 3 are assumed to have no successors)
![AI-DFS](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/AI/AI-DFS.png)

DFS is like a stack, Last in first out (LIFO), and the successors in searchAgent.py is described as 
```bash
def getSuccessors(self, state):
    """
    Returns successor states, the actions they require, and a cost of 1.

     As noted in search.py:
         For a given state, this should return a list of triples,
     (successor, action, stepCost), where 'successor' is a
     successor to the current state, 'action' is the action
     required to get there, and 'stepCost' is the incremental
     cost of expanding to that successor
    """

    successors = []
    for action in [Directions.NORTH, Directions.SOUTH, Directions.EAST, Directions.WEST]:
        x,y = state
        dx, dy = Actions.directionToVector(action)
        nextx, nexty = int(x + dx), int(y + dy)
        if not self.walls[nextx][nexty]:
            nextState = (nextx, nexty)
            cost = self.costFn(nextState)
            successors.append( ( nextState, action, cost) )

    # Bookkeeping for display purposes
    self._expanded += 1
    if state not in self._visited:
        self._visited[state] = True
        self._visitedlist.append(state)

    return successors
```
West is the last direction appending to the successors[], so that the agent will turn left at every crossings with DFS algorithm, just like the gif below:
![AI-DFS](https://raw.githubusercontent.com/jamesxwang/cdn/master/img/AI/AI-DFS.gif)
It is very obvious that DFS algorithm is not optimal nor complete.

#### Breadth-First Search
![AI-BFS](https://raw.githubusercontent.com/jamesxwang/cdn/master/img/AI/AI-BFS.gif)

#### Uniform-Cost Search

TBC...
