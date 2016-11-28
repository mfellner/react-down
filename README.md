# react-down
[![npm version](https://badge.fury.io/js/react-down.svg)](https://badge.fury.io/js/react-down)
[![Build Status](https://travis-ci.org/mfellner/react-down.svg?branch=master)](https://travis-ci.org/mfellner/react-down)
[![Coverage Status](https://coveralls.io/repos/github/mfellner/react-down/badge.svg?branch=master)](https://coveralls.io/github/mfellner/react-down?branch=master)

Transform Markdown to ReactElements.

### Usage

```javascript
import ReactDown, { transform } from 'react-down'
import ReactDOM from 'react-dom'

const src = `# Hello, Markdown!
This is an *example*.`

// Using the React component:
ReactDOM.render(<ReactDown src={src}/>, document.getElementById('main'))

// Using the transform function:
const element = transform(src)
ReactDOM.render(element, document.getElementById('main'))
```
