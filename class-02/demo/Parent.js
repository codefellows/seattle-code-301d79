import React, { Component } from 'react';
import Child from './Child.js';

export default class Parent extends Component {

    // what is this parents kid named?
    constructor(props) {
        super(props);
        // super is this method in js that says "take the info from the class you are extending, and use it the way it was being used before"
        this.state = {
            childName: 'Billy'
        }
    }

    // write a function that allows me to change my bunny's name in state

    render() {
        return (
            <div>
                <h1>I am the parent, I have a child named {this.state.childName}</h1>
                <Child name={this.state.childName} />
            </div>
        )
    }
}

// export default Parent