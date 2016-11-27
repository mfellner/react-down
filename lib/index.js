import * as transform from './transform'

export default function transformMarkdownToReactElement(src) {
  const tokens = transform.parseMarkdown(src)
  return transform.createReactTree(tokens)
}
