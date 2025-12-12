/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { SoundType } from '@/types/types'
import Slider from '@mui/material/Slider'
import React, { useEffect, useRef, useState } from 'react'

const Sound = ({
  src,
  title,
  icon,
  isActive,
  isMuted,
  isPlaying,
  onPlay,
  onPause
}: SoundType) => {
  const [volume, setVolume] = useState(0.5)
  // const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize audio element only once
    if (!audioRef.current) {
      const audio = new Audio(src)
      audioRef.current = audio
      audio.loop = true
      audio.preload = 'metadata' // Only load metadata initially for better performance
    }
    
    return () => {
      // Cleanup audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [src])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [isMuted, volume])

  useEffect(() => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      // Preload full audio when about to play
      audioRef.current.preload = 'auto'
      const playPromise = audioRef.current.play()
      // Handle play promise to avoid unhandled rejection errors
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing audio:', error)
        })
      }
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const handleSoundPlay = () => {
    if (isPlaying) {
      onPause && onPause()
    } else {
      onPlay && onPlay()
    }
  }

  const handleVolumeChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setVolume(value as number)
    audioRef.current && (audioRef.current.volume = value as number)
  }
  return (
    <div className="relative">
      <button
        onClick={handleSoundPlay}
        aria-label={`${isPlaying ? 'Stop' : 'Play'} ${title} sound`}
        aria-pressed={isPlaying}
        className={`p-[3rem_5rem] border-[2px] cursor-pointer border-white rounded-lg flex flex-col gap-[.5rem] justify-center items-center hover:bg-[rgba(255,255,255,.05)] ${
          isPlaying ? 'stop-sound' : 'play-sound'
        }`}
      >
        <div className="text-white font-bold">{title}</div>
        <img src={icon} alt={`${title} icon`} className="w-[75px] h-[75px]" />
      </button>
      {isPlaying ? (
        <Slider
          min={0}
          step={0.01}
          max={1}
          onChange={handleVolumeChange}
          value={volume}
          aria-label={`Volume control for ${title} sound`}
          className="!absolute !left-1/2 !transform !-translate-x-1/2  !bottom-[20px] !w-[170px] !text-white"
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default Sound
