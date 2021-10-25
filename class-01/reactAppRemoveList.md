# Remove unneeded files from creat-react-app react application

## from src:
- logo.svg
- reportWebVitals.js
- setupTests.js
- App.test.js

## from index.js: 
- line 5
  - import reportWebVitals from './reportWebVitals';
- line 17
  - reportWebVitals();

## from App.js
- erase and replace with
``` js

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

```