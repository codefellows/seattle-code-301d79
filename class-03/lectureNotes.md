# Lecture Notes

## Mapping over arrays in React
- react is a great templating language
- objects/class objects/constructor objects are also great for templating
- some array with a bunch of things inside of it that all have the same shape
- iterate through our array and smoosh our beasts into a component template
- hey! we have this great map method that will work to return an array of transformed elements!

## Pasing functions in react
- allows us to do something in a child component that will trigger behavior in the parent component
-  useful for writing a function IN the parent that updates state, and passing it as props to the child. The action of changing state still occurs in the parent, even if the child triggers it and/or passes arguments