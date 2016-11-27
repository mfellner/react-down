# react-down

Transform Markdown to ReactElements.

### Usage

```javascript
import transform from 'react-down'
import ReactDOM from 'react-dom'

const src = `# Hello, Markdown!
This is an *example*.
`
const element = transform(src)
ReactDOM.render(element, document.getElementById('main'))
```
