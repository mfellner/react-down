import React from 'react'
import renderer from 'react-test-renderer'
import transform from '../lib/transform'

describe('transform', () => {

  it('should transform headings', () => {
    const src = '# Hello, world!\n## This is a test.'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform paragraphs', () => {
    const src = 'First.\n\nSecond.'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform emphasis', () => {
    const src = '*Italics.* **Bold!**'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform links', () => {
    const src = '[Link](https://github.com)'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform images', () => {
    const src = '![test](test.png)'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform blockquotes', () => {
    const src = '> some quote'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should inline code', () => {
    const src = 'This is `code!`'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform horizontal rules', () => {
    const src = '----'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should transform tables', () => {
    const src = '| Col A | Col B |\n'
    + '| ------:| -----------:|\n'
    + '| aaa    | bbb         |\n'

    const component = renderer.create(transform(src))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
