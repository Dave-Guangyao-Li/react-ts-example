import React, { useState } from 'react'
import Icon from './assets/remix-default.svg'

interface ColorInfoProps {
  title: string
  code: string
}

const ColorInfo: React.FC<ColorInfoProps> = ({ title, code }) => {
  const [currentColor, setCurrentColor] = useState(code)
  const colorStyle = {
    backgroundColor: currentColor,
  }

  const handleColorClick = () => {
    const randomColorCode = generateRandomColorCode()
    setCurrentColor(randomColorCode)
  }

  const generateRandomColorCode = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <>
      <div className='row-content'>
        <div className='row-title'>
          <span>{title}</span>
        </div>
        <div className='color-display' style={colorStyle}></div>
        <div className='color-code'>
          <span>{currentColor}</span>
        </div>
        <div className='color-pick' onClick={handleColorClick}>
          <img src={Icon} alt='icon' />
        </div>
      </div>
    </>
  )
}

export default ColorInfo
