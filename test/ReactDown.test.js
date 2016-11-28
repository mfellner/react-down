import React from 'react'
import renderer from 'react-test-renderer'
import ReactDown from '../lib/ReactDown'

describe('ReactDown', () => {

  it('should render markdown', () => {
    const src = '# Hello, ReactDown!\nThis is *only* a **test**!'
    const component = renderer.create(
      <ReactDown src={src}/>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
