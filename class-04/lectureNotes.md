# Lecture Notes

## Retro questions
- weird lab instructions
- getting the beast to the modal

## Forms in react
### Why?
- it is the best way to get information from a user (the usual way)
- authentication (userName and password)
## What?
- a way to interact with a user to collect data
## How?
- we can still use `form` or we can use third-party library component (like bootstrap-react)

## Event Listeners in React
- onClick, onSubmit, onChange
- attach a listener via an attribute on a component/element
- onClick
  - when someone clicks on an element/component do something
- onSubmit
  - when someone submits a form, remember this is just like a form in js e.preventDefault()
- onChange
  - fires the handler any time a change is made to an input field
- Pros and Cons
  - onSubmit useful for lots of information
    - captures the values from the entire form and waits for the user to tell the app it is ready to submit data before capture
  - onChange captures state for every additonal character in the input
    - onChange is a little more 'reacty' when the value is being updated by the user we can make that our state and then use the value on input element to reflect the current state
