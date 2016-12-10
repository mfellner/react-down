import React from 'react'
import MarkdownIt from 'markdown-it'
import camelCase from 'camel-case'

function parseStyle(string) {
  const style = {}
  const pairs = string.split(';')
  for (let pair of pairs) {
    const [key, value] = pair.split(':')
    style[camelCase(key)] = value
  }
  return style
}

function parseAttrs(attrs) {
  if (!Array.isArray(attrs)) return null
  else return attrs.reduce((props, attr) => {
      const key = camelCase(attr[0])
      const value = key === 'style' ? parseStyle(attr[1]) : attr[1]
      return Object.assign(props, {[key]: value})
  }, {})
}

function createReactElements(nodes, tokens, createElement) {
  const lastNode = () => nodes[nodes.length - 1]
  let key = 0

  for (let token of tokens) {
    key += 1
    switch(token.type) {
      case 'heading_open':
      case 'paragraph_open':
      case 'em_open':
      case 'strong_open':
      case 'link_open':
      case 'blockquote_open':
      case 'bullet_list_open':
      case 'ordered_list_open':
      case 'list_item_open':
      case 'table_open':
      case 'thead_open':
      case 'tbody_open':
      case 'th_open':
      case 'tr_open':
      case 'td_open':
      case 's_open':
        nodes.push({
          type: token.tag,
          props: parseAttrs(token.attrs),
          children: [],
          token
        })
        break
      case 'inline':
        createReactElements(nodes, token.children, createElement)
        break
      case 'text':
        lastNode().children.push(token.content)
        break
      case 'softbreak':
      case 'hr':
        lastNode().children.push(createElement(token.tag, {key}, undefined, token))
        break
      case 'code_block':
      case 'code_inline':
      case 'fence':
        lastNode().children.push(createElement(token.tag, {key}, token.content, token))
        break
      case 'image':
      {
        const props = Object.assign({key}, parseAttrs(token.attrs), {alt: token.content})
        lastNode().children.push(createElement(token.tag, props, undefined, token))
        break
      }
      case 'heading_close':
      case 'paragraph_close':
      case 'em_close':
      case 'strong_close':
      case 'link_close':
      case 'blockquote_close':
      case 'bullet_list_close':
      case 'ordered_list_close':
      case 'list_item_close':
      case 'table_close':
      case 'thead_close':
      case 'tbody_close':
      case 'th_close':
      case 'tr_close':
      case 'td_close':
      case 's_close':
      {
        const node = nodes.pop()
        const props = Object.assign({key}, node.props)
        const element = createElement(node.type, props, node.children.slice(), node.token)
        lastNode().children.push(element)
        break
      }
      default:
        console.warn('Unknown token:', token)
    }
  }
}

function createReactTree(tokens, type, createElement) {
  const root = {
    type,
    props: null,
    children: []
  }
  createReactElements([root], tokens, createElement)
  return createElement(root.type, root.props, root.children, null)
}

function parseMarkdown(src) {
  const md = new MarkdownIt()
  return md.parse(src, {})
}

function defaultCreateElement(type, props, children) {
  return React.createElement(type, props, children)
}

export default function transform(src, createElement = defaultCreateElement) {
  return createReactTree(parseMarkdown(src), 'div', createElement)
}
