import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { WidgetChat } from '../src/index'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <WidgetChat
        currentUser='testingbaleee.testnet'
        generateAuthToken={Promise.resolve('1234567889')}
        partnership='Paras Marketplace'
      />,
    )
  })
})
