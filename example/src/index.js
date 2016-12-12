import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'

const DEFAULT_TEXT = `# Hello, react-down!

*This* is **markdown**.

> Quotes are pretty cool.

~~~javascript
function() {
  console.log('what is code')
}
~~~
`

ReactDOM.render(<App defaultText={DEFAULT_TEXT}/>, document.getElementById('main'))
