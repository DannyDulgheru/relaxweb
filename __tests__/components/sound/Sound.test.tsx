import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Sound from '@/components/sound/Sound'

// Mock Audio constructor
global.Audio = jest.fn().mockImplementation(() => ({
  play: jest.fn(),
  pause: jest.fn(),
  loop: false,
  volume: 0.5
}))

describe('Sound Component', () => {
  const mockProps = {
    src: '/sounds/rain_sound.mp3',
    title: 'Rain',
    icon: '/assets/rain-icon.svg',
    isActive: false,
    isMuted: false,
    isPlaying: false,
    onPlay: jest.fn(),
    onPause: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders sound title correctly', () => {
    render(<Sound {...mockProps} />)
    expect(screen.getByText('Rain')).toBeInTheDocument()
  })

  it('renders sound icon with correct attributes', () => {
    render(<Sound {...mockProps} />)
    const img = screen.getByAltText('Rain icon')
    expect(img).toHaveAttribute('src', '/assets/rain-icon.svg')
  })

  it('calls onPlay when clicked and not playing', () => {
    render(<Sound {...mockProps} />)
    const button = screen.getByRole('button', { name: /play rain sound/i })
    fireEvent.click(button)
    expect(mockProps.onPlay).toHaveBeenCalledTimes(1)
  })

  it('calls onPause when clicked and playing', () => {
    const playingProps = { ...mockProps, isPlaying: true }
    const onPauseMock = jest.fn()
    const propsWithMock = { ...playingProps, onPause: onPauseMock }
    render(<Sound {...propsWithMock} />)
    const button = screen.getByRole('button', { name: /stop rain sound/i })
    fireEvent.click(button)
    expect(onPauseMock).toHaveBeenCalled()
  })

  it('shows volume slider when playing', () => {
    const playingProps = { ...mockProps, isPlaying: true }
    render(<Sound {...playingProps} />)
    const slider = screen.getByRole('slider', {
      name: /volume control for rain sound/i
    })
    expect(slider).toBeInTheDocument()
  })

  it('does not show volume slider when not playing', () => {
    render(<Sound {...mockProps} />)
    const slider = screen.queryByRole('slider')
    expect(slider).not.toBeInTheDocument()
  })

  it('applies correct CSS class when playing', () => {
    const playingProps = { ...mockProps, isPlaying: true }
    render(<Sound {...playingProps} />)
    const soundContainer = screen.getByText('Rain').parentElement
    expect(soundContainer).toHaveClass('stop-sound')
  })

  it('applies correct CSS class when not playing', () => {
    render(<Sound {...mockProps} />)
    const soundContainer = screen.getByText('Rain').parentElement
    expect(soundContainer).toHaveClass('play-sound')
  })
})
