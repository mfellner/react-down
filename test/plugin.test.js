import React from 'react'
import renderer from 'react-test-renderer'
import transform from '../lib/transform'
import combinePlugins from '../lib/plugin'

describe('plugins', () => {
  it('should combine plugins', () => {
    const plugin1 = (type, props, children) => {
      if (type === 'h1') return React.createElement('span', props, children)
    }

    const plugin2 = (type, props, children) => {
      if (type === 'em') return React.createElement('bold', props, children)
    }

    const src = '# Hello, world!\n## This is a *test*.'
    const pluggedTransform = combinePlugins(plugin1, plugin2)(transform)
    const component = renderer.create(pluggedTransform(src))

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should receive the token argument', () => {
    const tokens = []
    const plugin = (type, props, children, token) => {
      tokens.push(token)
    }

    const src = '# Hello, world!\n## This is a *test*.'
    const pluggedTransform = combinePlugins(plugin)(transform)
    const component = renderer.create(pluggedTransform(src))

    expect(tokens.length).toBe(4)
    expect(tokens[0].tag).toBe('h1')
    expect(tokens[1].tag).toBe('em')
    expect(tokens[2].tag).toBe('h2')
    expect(tokens[3]).toBe(null)
  })
})
