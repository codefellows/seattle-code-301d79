# Lecture Notes

## What's new in 301?
- warm-ups
  - in multiple langages
- code challenges
  - see shred talks if you learn well from video demo
  - first introduction to formal testing and TDD
  - practice for interviews
- more pair programming
- more career coaching assignments
- labs use trello for workflow

### How to succeed
- turn in EVERY assignment - very easy to fall behind
  - even if it is not done
- career assignments and reading open
- work with others
- 15 minute rule
- Time box your day
  - lunch
  - 1 hour code challenge
  - 4 hours lab
  - retro
  - reading


## React and Component Based UI
### What?
- React (angular, vue) is/are component based libraries that allow us to build applications using this style of architecture
- We treat components like they are html elements `<Header />`
- Bind state/data to the DOM, they update the dom for us!!
  - react rerenders content when state changes by using a Virtual DOM
- Modularity
  - each component is it's own module, or block of code, that we can make available in another component
  - export the component from it's file, and import it where you want to use it
    - you can also import css and other files to a component module
### Why?
- react is hugely in demand in the industry
- Component based architecture is easier to test and reuse
- dynamicly updates application state without requiring a page reload
- dev advantages
  - reusable parts
  - separation of concerns
### How
- WRRC
  - a request is made in the address bar for our website resource and the files are served
  - who is the client, who is the server?
- Use `npx create-react-app <application_name>` to start your project
- refer to the reactAppRemove.md if you want to clean up the file structure before you start
- JSX (syntax extension) allows us to write html markup in javascript 

## Arrow Function
- multiple ways to create a function
  - mostly been doing function declarations in 201
  - `const myFunct = function() {console.log()}`
  - `const superCoolThing = () => {console.log('i am a function)}`
  - function expresions are another way and arrow functions are one way to write a function expression 
- function expression vs. declaration
  - Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
  - Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.
  - benifits of function expressions
    - in closures - https://www.youtube.com/watch?v=qikxEIxsXco
    - as an argument to another function
    - to immediately invoke your function
- allow us to write concise one line functions
- the contextual this is not bound to the function if you use an arrow function, it will bubble up to the next non-arrow function