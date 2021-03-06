import React, { useState } from 'react'
import Canvas from '../components/Canvas'
import Info from '../components/Info'
import '../styles/styles.css'

export default function Game(): React.ReactElement {
  const [isPlaying, setIsPlaying] = useState(false)
  const [immortality, setImmortality] = useState(false)
  const [currStep, setCurrStep] = useState(0)

  const handleClick = () => {
    setIsPlaying((p) => !p)
  }

  return (
    <div style={style}>
      <Info
        onPlay={handleClick}
        immortality={immortality}
        onToggleImmortality={() => setImmortality((im) => !im)}
        isPlaying={isPlaying}
      />
      <div className="canvas-area">
        {/* <Canvas isPlaying={isPlaying} fadeRate={1} drawDead={false} /> */}
        {/* <Canvas isPlaying={isPlaying} fadeRate={1} /> */}
        {/* <Canvas isPlaying={isPlaying} fadeRate={0.25} /> */}
        {/* <Canvas isPlaying={isPlaying} fadeRate={0.05} /> */}
        <Canvas
          isPlaying={isPlaying}
          immortality={immortality}
          fadeRate={0.25}
        />
      </div>
    </div>
  )
}

const style: React.CSSProperties = {
  display: 'flex',
  margin: 0,
  padding: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'aquamarine',
  fontFamily: 'Helvetica, sans-serif',
  overflow: 'hidden',
}
