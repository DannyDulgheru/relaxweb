import React from 'react'
import { render, screen } from '@testing-library/react'
import SoundPlayer from '@/components/sound/SoundPlayer'

// Mock the SoundList component since it's imported from SoundPlayer
jest.mock('@/components/sound/SoundPlayer', () => {
  return jest.fn(() => <div data-testid="mocked-soundlist">Sound List</div>)
})

describe('SoundList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('exports SoundList component from SoundPlayer', () => {
    const SoundListComponent = require('@/components/sound/SoundList').default
    expect(SoundListComponent).toBeDefined()
  })
})
