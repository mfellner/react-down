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
})
