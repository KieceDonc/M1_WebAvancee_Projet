import { describe, expect, test } from '@jest/globals'
import { getByTestId, render, act, fireEvent, screen, prettyDOM } from '@testing-library/react'

import { mockCarType, mockCarTabData } from '../__mocks__/objectsMock'

import React from 'react'
import TriType from '../components/TriType'
import { Car } from '../models/interface'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('TriType : Integration', () => {
  it('renders correctly when passed mock props', () => {
    const { getByTestId } = render(
      <TriType type={mockCarType} tabdata={mockCarTabData} onSort={(sortedValue: Car[]) => {}} />,
    )
    getByTestId('render')
  })
})
